"use strict";

import png_ from "../images/maphead.svg";
import normalise_ from "../../node_modules/normalize.css";
import css_ from "../css/styles.css";
import { EventDelegator, getTargetId } from "./olooEvent";
import { SubscribersDelegator } from "./olooObserver";
import { ElemDelegator, FragmentDelegator } from "./olooElem";
import { defineCards } from "./cards";
import leaflet_ from "./leafletembed";

const myBase = Object.create(null);
const myApp = SubscribersDelegator();

myBase.initApplication = function init() {
  myApp.init();

  const card = defineCards();

  // TODO Have these on a seperate page and import them
  // TODO item-1 classname thing
  //     // Need image cover
  const projects = document.getElementById("projects");
  const projectsContainer = document.createElement("div");
  projectsContainer.className = "projects-container";

  // Add all cards to the project container
  Object.keys(card).forEach(key => {
    card[key].addHtml(projectsContainer);
  });

  // Add project container to the DOM
  projects.appendChild(projectsContainer);

  // TODO Create a function to semi randomly order the projects or similar

  // Band for differnet content (LATER)

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

myBase.main = function main(id) {
  // const self = myApp.obj[id];
};

// ======================================================================
// Handler when the DOM is fully loaded
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
