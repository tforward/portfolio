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

  const createCard = function card(data) {
    // Just use the same syntax for node elements
    const state = {
      card: { elem: "div", id: data.elemId, className: data.cardClass },
      cardText: { elem: "div", className: "card-text" },
      title: { elem: "h3", textContent: data.title, className: "card-title" },
      imgFrame: { elem: "div", className: "card-img-frame center" },
      imgBox: { elem: "div", className: "card-img-box" },
      img: { elem: "img", className: data.imgClass, src: `../images/${data.imageName}.jpg` },
      imgOverlay: { elem: "div", className: "card-img-overlay" },
      btnDemoUrl: { elem: "a", className: "noTextDecoration", href: data.demoUrl, target: "_blank" },
      btnCodeUrl: { elem: "a", className: "noTextDecoration", href: data.codeUrl, target: "_blank" },
      btnDemo: { elem: "button", className: "card-img-overlay-btn center demo", textContent: "Demo" },
      btnCode: { elem: "button", className: "card-img-overlay-btn center code", textContent: "Code" },
      desc: { elem: "p", className: "card-desc", textContent: data.description },
      toolbox: { elem: "p", className: "toolbox", textContent: data.tools }
    };
    // TODO Make this more modular
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

  // TODO Have these on a seperate page and import them
  // TODO item-1 classname thing
  //     // Need image cover
  const cardCalc = createCard({
    elemId: "card-calc",
    title: "Calculator",
    description: "A Responsive Formula Expression Logic Calculator",
    demoUrl: "https://tforward.github.io/JSCalculator/",
    codeUrl: "https://github.com/tforward/JSCalculator",
    tools: "HTML, CSS (Grid), JS (esLint)",
    imageName: "calculator",
    imgClass: "card-img-portrait",
    cardClass: "card"
  });
  cardCalc.createElems();

  const cardTwitch = createCard({
    elemId: "card-twitch",
    title: "Twitch Viewer",
    description: "A Twitch API Responsive Viewer",
    demoUrl: "https://tforward.github.io/fccTwitchTV/",
    codeUrl: "https://github.com/tforward/fccTwitchTV",
    tools: "HTML, CSS (Flexbox), JS (esLint), Webpack, Twitch API",
    imageName: "twitch",
    imgClass: "card-img-landscape",
    cardClass: "card cardSpan2"
  });
  cardTwitch.createElems();

  const cardPomodoro = createCard({
    elemId: "card-pomodoro",
    title: "Pomodoro Clock",
    description: "A Responsive Pomodoro Clock",
    demoUrl: "https://tforward.github.io/fccPomodoro/",
    codeUrl: "https://github.com/tforward/fccPomodoro",
    imageName: "calculator",
    imgClass: "card-img-portrait",
    tools: "HTML, CSS (Flexbox, Grid, Variables), JS (esLint), Webpack",
    cardClass: "card"
  });
  cardPomodoro.createElems();

  const cardGridImage = createCard({
    elemId: "card-gridImage",
    title: "Grid 5x5",
    description: "A just for fun experiment with CSS Grid",
    demoUrl: "https://tforward.github.io/gridImage/",
    codeUrl: "https://github.com/tforward/gridImage",
    imageName: "calculator",
    imgClass: "card-img-portrait",
    tools: "HTML, CSS (Flexbox, Grid), JS (esLint), Webpack",
    cardClass: "card"
  });
  cardGridImage.createElems();

  const cardSimon = createCard({
    elemId: "card-simon",
    title: "Simon Game",
    description: "The classic 1980's game Simon",
    demoUrl: "https://tforward.github.io/fccSimon/",
    codeUrl: "https://github.com/tforward/fccSimon",
    imageName: "calculator",
    imgClass: "card-img-portrait",
    tools: "HTML, CSS (Flexbox), JS (esLint), Webpack",
    cardClass: "card"
  });
  cardSimon.createElems();

  const cardTicTac = createCard({
    elemId: "card-tictac",
    title: "Tic Tac Toe Game",
    description: "The always classic Tic Tac Toe!",
    demoUrl: "https://tforward.github.io/fccTicTacToe/",
    codeUrl: "https://github.com/tforward/fccTicTacToe",
    imageName: "calculator",
    imgClass: "card-img-portrait",
    tools: "HTML, CSS (Flexbox), JS (esLint), Gulp",
    cardClass: "card"
  });
  cardTicTac.createElems();

  const cardLeafshoot = createCard({
    elemId: "card-leaf",
    title: "LeafShoot",
    description: "A responsive map template",
    demoUrl: "https://tforward.github.io/LeafShoot/",
    codeUrl: "https://github.com/tforward/LeafShoot",
    imageName: "calculator",
    imgClass: "card-img-portrait",
    tools: "HTML, CSS (Bootstrap), JS (Leaflet)",
    cardClass: "card"
  });
  cardLeafshoot.createElems();

  const projects = document.getElementById("projects");
  // TODO Create a function to semi randomly order the projects or similar
  cardPomodoro.appendContent(projects);
  cardCalc.appendContent(projects);
  cardTwitch.appendContent(projects);
  cardGridImage.appendContent(projects);
  cardSimon.appendContent(projects);
  cardTicTac.appendContent(projects);
  cardLeafshoot.appendContent(projects);

  // const eventSandbox = EventDelegator();
  // eventSandbox.initEvent("eventSandbox", "click", { tags: ["BUTTON"] });
  // eventSandbox.addEvent(eventController);

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
