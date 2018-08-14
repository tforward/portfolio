"use strict";

import png_ from "../images/maphead.svg";
import normalise_ from "../../node_modules/normalize.css";
import css_ from "../css/styles.css";
import { EventDelegator, getTargetId } from "./olooEvent";
import { SubscribersDelegator } from "./olooObserver";
import { ElemDelegator, FragmentDelegator, appendElemsToParent } from "./olooElem";
import leaflet_ from "./leafletembed";

const myBase = Object.create(null);
const myApp = SubscribersDelegator();

myBase.initApplication = function init() {
  myApp.init();

  const createCard = function card(data) {
    // Just use the same syntax for node elements
<<<<<<< HEAD
    const state = `<div id="${data.elemId}" class="card-calc">
    <a class="card" href="${data.demoUrl}">
        <div class="thumb" style="background-image: url(../images/${data.imageName}.jpg)">
          <div class="thumb-overlay center">
              <div class="card-btn-holder center">
    <a class="noTextDecoration" href="${
      data.demoUrl
    }" target="_blank"><button class="card-btn demo center noSelect">Demo</button></a><a class="noTextDecoration" href="${
      data.codeUrl
    }" target="_blank"><button class="card-btn code center noSelect">Code</button></a></div></div></div>
    <article>
        <h1 class="title">${data.title}</h1>
        <span class="toolbox">${data.tools}</span>
    </article>
    </a>
  </div>`;

=======
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
>>>>>>> parent of 111dafe... redo
    // If you add an object to create it will show up on the __proto__
    // for that object, default null.
    return Object.assign(Object.create(null), ElemDelegator(state), FragmentDelegator(state));
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
    tools: "HTML, CSS (Grid), JS (ESLint)",
    imageName: "calculator",
    imgClass: "card-img-portrait",
    cardClass: "card"
  });
  cardCalc.addHtml(parent);

  const cardTwitch = createCard({
    elemId: "card-twitch",
    title: "Twitch Viewer",
    description: "A Twitch API Responsive Viewer",
    demoUrl: "https://tforward.github.io/fccTwitchTV/",
    codeUrl: "https://github.com/tforward/fccTwitchTV",
    tools: "HTML, CSS (Flexbox), JS (ESLint, Webpack, Twitch API)",
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
    imageName: "pomodoro",
    imgClass: "card-img-portrait",
    tools: "HTML, CSS (Flexbox, Grid, Variables), JS (ESLint, Webpack)",
    cardClass: "card"
  });
  cardPomodoro.createElems();

  const cardGridImage = createCard({
    elemId: "card-gridImage",
    title: "Grid 5x5",
    description: "A just for fun experiment with CSS Grid",
    demoUrl: "https://tforward.github.io/gridImage/",
    codeUrl: "https://github.com/tforward/gridImage",
    imageName: "grid5x5",
    imgClass: "card-img-portrait",
    tools: "HTML, CSS (Flexbox, Grid), JS (ESLint, Webpack)",
    cardClass: "card"
  });
  cardGridImage.createElems();

  const cardSimon = createCard({
    elemId: "card-simon",
    title: "Simon Game",
    description: "The classic 1980's game Simon",
    demoUrl: "https://tforward.github.io/fccSimon/",
    codeUrl: "https://github.com/tforward/fccSimon",
    imageName: "simon",
    imgClass: "card-img-portrait",
    tools: "HTML, CSS (Flexbox), JS (ESLint, Webpack)",
    cardClass: "card"
  });
  cardSimon.createElems();

  const cardTicTac = createCard({
    elemId: "card-tictac",
    title: "Tic Tac Toe Game",
    description: "The always classic Tic Tac Toe!",
    demoUrl: "https://tforward.github.io/fccTicTacToe/",
    codeUrl: "https://github.com/tforward/fccTicTacToe",
    imageName: "tictac",
    imgClass: "card-img-portrait",
    tools: "HTML, CSS (Flexbox), JS (ESLint, Gulp)",
    cardClass: "card"
  });
  cardTicTac.createElems();

  const cardLeafshoot = createCard({
    elemId: "card-leaf",
    title: "LeafShoot",
    description: "A responsive map template",
    demoUrl: "https://tforward.github.io/LeafShoot/",
    codeUrl: "https://github.com/tforward/LeafShoot",
    imageName: "leafshoot",
    imgClass: "card-img-landscape",
    tools: "HTML, CSS (Bootstrap), JS (Leaflet)",
    cardClass: "card cardSpan2"
  });
  cardLeafshoot.createElems();

  const cardCBCLogo = createCard({
    elemId: "card-cbc",
    title: "CBC Logo",
    description: "A tribute to the CBC logo",
    demoUrl: "https://codepen.io/tforward/full/JZavoY/",
    codeUrl: "https://codepen.io/tforward/pen/JZavoY",
    imageName: "cbc",
    imgClass: "card-img-portrait",
    tools: "HTML, CSS (Grid, Pseudo elements, variables)",
    cardClass: "card"
  });
  cardCBCLogo.createElems();

  const cardCalgaryMap = createCard({
    elemId: "card-calgaryMap",
    title: "Calgary Pop Density Map",
    description: "An interactive population density map of Calgary",
    demoUrl: "https://codepen.io/tforward/full/JZavoY/",
    codeUrl: "https://codepen.io/tforward/pen/JZavoY",
    imageName: "calgaryMap",
    imgClass: "card-img-portrait",
    tools: "HTML, CSS, JS (Bootstrap, Leaflet), Other (QGIS)",
    cardClass: "card"
  });
  cardCalgaryMap.createElems();

  const projects = document.getElementById("projects");

  // TODO Create a function to semi randomly order the projects or similar

  appendElemsToParent(
    [
      cardPomodoro,
      cardCalc,
      cardTwitch,
      cardGridImage,
      cardSimon,
      cardTicTac,
      cardLeafshoot,
      cardCBCLogo,
      cardCalgaryMap
    ],
    projects
  );

  // Band for differnet content (LATER)
  // Footer Contacts etc.

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
