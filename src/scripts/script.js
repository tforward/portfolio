"use strict";

import png_ from "../images/maphead.svg";
import normalise_ from "../../node_modules/normalize.css";
import css_ from "../css/styles.css";
import { EventDelegator, getTargetId } from "./olooEvent";
import { SubscribersDelegator } from "./olooObserver";
import { defineCards } from "./cards";
import leaflet_ from "./leafletembed";
import SmoothScroll from "./smooth-scroll.polyfills.min";

const myBase = Object.create(null);
const myApp = SubscribersDelegator();

myBase.initApplication = function init() {
  myApp.init();

  const card = defineCards();
  const projects = document.getElementById("projects");
  const projectsContainer = document.createElement("ul");
  projectsContainer.className = "projects-grid card-list";

  // Add all cards to the project container
  Object.keys(card).forEach(key => {
    card[key].addHtml(projectsContainer);
  });

  // Add project container to the DOM
  projects.appendChild(projectsContainer);

  // TODO LATER Create a function to semi randomly order the projects or similar

  const eventSandbox = EventDelegator();
  eventSandbox.initEvent("eventSandbox", "click", { tags: ["BUTTON"] });
  eventSandbox.addEvent(eventController);

  function eventController(args, e) {
    const id = getTargetId(e, args.tags);
    if (id !== undefined) {
      console.log(id);
    }
  }
};

const scroll = new SmoothScroll("a[href*='#summary']", {
  // Speed & Easing
  speed: 800, // Integer. How fast to complete the scroll in milliseconds
  clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
  easing: "easeInOutCubic" // Easing pattern to use
});

// myBase.main = function main(id) {
//   // const self = myApp.obj[id];
// };

// ======================================================================
// Handler for when the DOM is fully loaded
document.onreadystatechange = function onreadystatechange() {
  if (document.readyState === "complete") {
    if (process.env.NODE_ENV !== "production") {
      console.log("*** RUNNING IN DEV MODE! ***");
    }
    myBase.initApplication();
  } else {
    // Do something during loading (optional)
  }
};
// ======================================================================
