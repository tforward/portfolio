// ======================================================================
// OOLO Event Sandbox Delegator Utilities
//
// Creating a new sandbox based on element ID's
//
// Import Script
// import { EventDelegator, getTargetId } from "./olooEvent";
//
// # Instantiate Delegator
//  const eventSandbox = EventDelegator();
// # Define Element by ID to attached Event sandbox to, types of event, and on what tags
//  eventSandbox.initEvent("eventSandbox", "click", { tags: ["BUTTON"] });
//  For more Event types see: https://developer.mozilla.org/en-US/docs/Web/Events
// # Call a function to handle the events ex. EventController Handles all events within the Event sandbox
//    Note: EventController is just a function that's called
//  eventSandbox.addEvent(eventController);
//
// Example Event Controller
// function eventController(args, e) {
//   // Only Passes events of with tagNames defined in the array
//   const id = getTargetId(e, args.tags);
//   if (id !== undefined) {
//     const obj = myApp.elems[id];
//   }
// }
// ======================================================================

export function EventDelegator() {
  // Creates an Event object on the element
  const Event = Object.create(null);

  Event.initEvent = function setup(elemId, type, args) {
    // The Element to bind the event handler too
    this.elem = document.getElementById(elemId);
    // The type of event ex: "click"
    this.eventType = type;
    // Additional arguments that will be passed to the bound function as an object
    this.args = args;
    // Helper: If Array convert to object
    if (Array.isArray(args)) {
      this.args = Object.assign({}, args);
    }
  };
  Event.addEvent = function add(func, options) {
    // func: Bound an Function to an Event
    // (options): Optional parameter for passing options to event listener ex: "once: true"
    this.boundFunc = func.bind(this.elem, this.args);
    // this.bound prevents binding loss for arguments and options
    this.boundOptions = options;
    this.elem.addEventListener(this.eventType, this.boundFunc, this.boundOptions);
  };
  Event.removeEvent = function remove() {
    // Remove the listener, do not have to pass the "options" since it is bound
    this.elem.removeEventListener(this.eventType, this.boundFunc, this.boundOptions);
  };
  return Event;
}

// ======================================================================
// Event Utilities
// ======================================================================

export function getTargetId(e, tags) {
  let findId;
  // lookup the path chain for the nearest id that matches the tag types
  const pathArray = Array.from(e.path);
  let i = 0;
  for (; i < pathArray.length; i += 1) {
    // Returns the target ID of event for allowed tags Ex: DIV, BUTTON etc.
    if (tags.indexOf(pathArray[i].tagName) > -1) {
      findId = pathArray[i].id;
      if (findId !== "") {
        return findId;
      }
    }
  }
  // Returns undefined if no target match by ID or up the path chain.
  // Note: If returns an ID you don't expect, is likely the element
  // is not ID correctly.
  return undefined;
}
