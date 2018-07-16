"use strict";

import png_ from "../images/maphead.svg";
import normalise_ from "../../node_modules/normalize.css";
import css_ from "../css/styles.css";
import { EventDelegator, getTargetId } from "./olooEvent";
import { SubscribersDelegator } from "./olooObserver";
import { ElementDelegator, initElemObjects } from "./olooElem";
import leaflet_ from "./leafletembed";

const myBase = Object.create(null);
const myApp = SubscribersDelegator();

myBase.initApplication = function init() {
  myApp.init();

  function ProjectDelegator() {
    const Project = Object.create(null);

    Project.setContent = function content(data) {
      this.title = data.title;
      this.img = data.img;
      this.url = data.url;
      this.desc = data.desc;
      this.tags = data.tags;
    };

    return Project;
  }

  const projects = initElemObjects(["calc", "test"], "div", ElementDelegator, ProjectDelegator);

  myApp.subscribe("projects", projects);
  const project = myApp.obj.projects;

  project.calc.setContent({ title: "Calculator", desc: "A calculator build with love" });
  console.log(project.calc);

  const projectBase = document.getElementById("projects");

  project.calc.elem.className = "card pad1 boxShadow";

  projectBase.appendChild(project.calc.elem);

  //   const eventSandbox = EventDelegator();
  //   eventSandbox.initEvent("eventSandbox", "click", { tags: ["BUTTON"] });
  //   eventSandbox.addEvent(eventController);

  function eventController(args, e) {
    const id = getTargetId(e, args.tags);
    if (id !== undefined) {
      myBase.main(id);
    }
  }
};

myBase.main = function main(id) {
  const self = myApp.obj[id];
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
