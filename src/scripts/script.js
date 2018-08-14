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

    // If you add an object to create it will show up on the __proto__
    // for that object, default null.
    return Object.assign(Object.create(null), ElemDelegator(state), FragmentDelegator(state));
  };

  // TODO Have these on a seperate page and import them
  // TODO item-1 classname thing
  //     // Need image cover
  const projects = document.getElementById("projects");
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
  cardCalc.addHtml(projects);

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
    cardClass: "card"
  });
  cardLeafshoot.createElems();

<<<<<<< HEAD
=======
  const projects = document.getElementById("projects");
>>>>>>> parent of ccb114b... changes images
  // TODO Create a function to semi randomly order the projects or similar
  cardPomodoro.appendContent(projects);
  cardCalc.appendContent(projects);
  cardTwitch.appendContent(projects);
  cardGridImage.appendContent(projects);
  cardSimon.appendContent(projects);
  cardTicTac.appendContent(projects);
  cardLeafshoot.appendContent(projects);

  // Band for differnet content (LATER)

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
