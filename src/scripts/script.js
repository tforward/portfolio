"use strict";

import png_ from "../images/maphead.svg";
import normalise_ from "../../node_modules/normalize.css";
import css_ from "../css/styles.css";
import { EventDelegator, getTargetId } from "./olooEvent";
import { SubscribersDelegator } from "./olooObserver";
import { ElemDelegator, FragmentDelegator } from "./olooElem";
import leaflet_ from "./leafletembed";

const myBase = Object.create(null);
const myApp = SubscribersDelegator();

myBase.initApplication = function init() {
  myApp.init();

  const createCard = function card(elemId) {
    // Just use the same syntax for node elements
    const state = {
      card: { elem: "div", id: elemId, className: "card pad1 boxShadow" },
      title: { elem: "h2", textContent: "Calculator", className: "card-title pad1" },
      img: { elem: "img", className: "card-img", src: "../images/calculator.jpg", alt: "A Calculator" },
      desc: { elem: "p", textContent: "A calculator build with love", className: "card-desc pad1" }
    };
    const addContent = () => ({
      appendContent: function appendContent(parent) {
        const content = this.addFragments([this.title, this.img, this.desc]);
        this.card.elem.appendChild(content);
        parent.appendChild(this.card.elem);
      }
    });
    // If you add an object to create it will show up on the __proto__
    // for that object, default null.
    return Object.assign(Object.create(state), addContent(), ElemDelegator(state), FragmentDelegator(state));
  };

  const x = createCard("card-calc");
  x.createElems();

  const projects = document.getElementById("projects");
  x.appendContent(projects);

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
