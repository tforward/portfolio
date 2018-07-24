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

  const createCard = function card(elemId, demoUrl, codeUrl, tools) {
    // Just use the same syntax for node elements
    const state = {
      card: { elem: "div", id: elemId, className: "card" },
      cardText: { elem: "div", className: "card-text" },
      title: { elem: "h3", textContent: "Calculator", className: "card-title" },
      imgFrame: { elem: "div", className: "card-img-frame center" },
      imgBox: { elem: "div", className: "card-img-box" },
      img: { elem: "img", className: "card-img", src: "../images/calculator.jpg", alt: "A Calculator" },
      imgOverlay: { elem: "div", className: "card-img-overlay" },
      btnDemoUrl: { elem: "a", className: "noTextDecoration", href: demoUrl, target: "_blank" },
      btnCodeUrl: { elem: "a", className: "noTextDecoration", href: codeUrl, target: "_blank" },
      btnDemo: { elem: "button", className: "card-img-overlay-btn center demo", textContent: "Demo" },
      btnCode: { elem: "button", className: "card-img-overlay-btn center code", textContent: "Code" },
      desc: { elem: "p", textContent: "A calculator build with love", className: "card-desc" },
      toolbox: { elem: "p", textContent: tools }
    };
    const addContent = () => ({
      appendContent: function appendContent(parent) {
        this.cardText.elem.appendChild(this.addElem([this.title, this.desc, this.toolbox]));
        this.btnDemoUrl.elem.appendChild(this.btnDemo.elem);
        this.btnCodeUrl.elem.appendChild(this.btnCode.elem);
        this.imgOverlay.elem.appendChild(this.addElem([this.btnDemoUrl, this.btnCodeUrl]));
        this.imgFrame.elem.appendChild(this.addElem([this.imgBox, this.img, this.imgOverlay]));
        this.card.elem.appendChild(this.addElem([this.imgFrame, this.cardText]));
        parent.appendChild(this.card.elem);
      }
    });
    // If you add an object to create it will show up on the __proto__
    // for that object, default null.
    return Object.assign(Object.create(state), addContent(), ElemDelegator(state), FragmentDelegator(state));
  };

  const cardCalc = createCard(
    "card-calc",
    "https://tforward.github.io/JSCalculator/",
    "https://github.com/tforward/JSCalculator",
    "HTML, CSS (Flexbox), JS (esLint)"
  );
  cardCalc.createElems();

  const projects = document.getElementById("projects");
  cardCalc.appendContent(projects);

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
