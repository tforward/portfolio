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

  const createCard = function card(id) {
    const state = {
      id,
      elem: document.createElement("div"),
      title: document.createElement("h2"),
      desc: document.createElement("p"),
      data: Object.create(null)
    };
    // If you add an object to create it will show up on the __proto__
    // for that object, default null.
    return Object.assign(Object.create(state), contentManager(state));
  };

  function contentManager(state, proto = null) {
    const Content = Object.create(proto);
    Content.setText = (elem, value) => {
      elem.textContent = value;
    };
    Content.setClass = (elem, classname) => {
      elem.className = classname;
    };
    return Content;
  }

  function defineCard({ _card, _title, _desc }) {
    createElems({ _card, _title, _desc });
    const card = createCard("card-calc");
    card.elem.className = _card.classname;

    card.title.textContent = _title.textContent;
    card.title.className = _title.classname;

    card.desc.textContent = _desc.textContent;
    return card;
  }

  const calcCard = {
    _card: { elem: "div", classname: "card pad1 boxShadow" },
    _title: { elem: "h2", textContent: "Calculator", classname: "card-title pad1" },
    _desc: { elem: "p", textContent: "A calculator build with love", classname: "card-desc pad1" }
  };

  const x = defineCard(calcCard);

  const projects = document.getElementById("projects");
  projects.appendChild(x.elem);
  x.elem.appendChild(x.title);
  x.elem.appendChild(x.desc);

  function createElems(...args) {
    console.log(...args);
  }

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
