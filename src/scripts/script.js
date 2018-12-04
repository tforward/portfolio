"use strict";

// import png_ from "../images/maphead.SVG";
import normalise_ from "../../node_modules/normalize.css";
import css_ from "../css/styles.css";
import { EventDelegator, getTargetId } from "./olooEvent";
import { SubscribersDelegator } from "./olooObserver";
import { defineCards } from "./cards";
import { initmap } from "./leafletembed";
import SmoothScroll from "./smooth-scroll.polyfills.min";
import { timer } from "./timeIt";

const leafMap = initmap();

const myBase = Object.create(null);
const myApp = SubscribersDelegator();

myBase.initApplication = function init() {
  myApp.init();

  const card = defineCards();
  const projects = document.getElementById("projects");
  const projectsContainer = document.createElement("ul");
  projectsContainer.className = "projects-grid cards";

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
      if (id.startsWith("filter")) {
        filterProjectsBtn(id);
        console.log(id);
      }
    }
  }
};

const scroll = new SmoothScroll("a[href*='#PortfolioStart']", {
  // Speed & Easing
  speed: 800, // Integer. How fast to complete the scroll in milliseconds
  clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
  easing: "easeInOutCubic" // Easing pattern to use
});

function filterProjectsBtn(id) {
  const selected = document.getElementsByClassName("filter-selected")[0];
  selected.classList.remove("filter-selected");
  const newSelection = document.getElementById(id);
  newSelection.classList.add("filter-selected");
  filterProjects(id);
}

function filterProjects(id) {
  if (id === "filter-projects") {
    removeClass("project", "hidden-project");
    addClass("fun", "hidden-project");
    addClass("blog", "hidden-project");
  } else if (id === "filter-fun") {
    removeClass("fun", "hidden-project");
    addClass("project", "hidden-project");
    addClass("blog", "hidden-project");
  } else if (id === "filter-all") {
    removeClass("fun", "hidden-project");
    removeClass("project", "hidden-project");
    removeClass("blog", "hidden-project");
  }
}

function addClass(tag, theClass) {
  const projectList = document.getElementsByClassName(tag);
  console.log(projectList);
  for (let i = 0; i < projectList.length; i += 1) {
    projectList[i].classList.add(theClass);
  }
}

function removeClass(tag, theClass) {
  const projectListRemove = document.getElementsByClassName(tag);
  for (let i = 0; i < projectListRemove.length; i += 1) {
    projectListRemove[i].classList.remove(theClass);
  }
}

// ======================================================================
// Map - Change Map
// ======================================================================

function getLeafPnt(x, y) {
  return new L.LatLng(x, y);
}

function randomIntMinMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomCoord() {
  const x = randomIntMinMax(49, 56);
  const y = randomIntMinMax(-79, -125);
  return getLeafPnt(x, y);
}

function leafletSetView(pnt) {
  leafMap.setView(pnt, 9, true);
}

function randomSamplePnt() {
  const pnt = pointList[Math.floor(Math.random() * pointList.length)];
  leafletSetView(pnt);
}

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

leafMap.on("click", e => {
  const pnt = getRandomCoord();
  leafletSetView(pnt);
  // Used for debugging
  // console.log(`Lat, Lon : [${e.latlng.lat}, ${e.latlng.lng}], `);
});

let pointList = [
  [51.262485898428785, -68.74292437446594],
  [51.32145337655852, -68.9421481134463],
  [48.97540875705961, -68.4160813809419],
  [46.29254831561058, -77.1117600918794],
  [45.67228256021794, -81.7644700528169],
  [41.73306131785704, -82.98120562446594],
  [42.6750284167221, -79.24860010760777],
  [43.10766561995877, -79.53699175727844],
  [43.73207342008998, -76.37292898908373]
];

// TODO

// - Add Article in
// - Portfolio button jumping around fix
// 	- I think just needs a default size on area below

// - Card grow size based on content
// - Code Btn hide
// - Add in Time added of projects addednpm start

function runMapChanger() {
  if (checkifMobile() === false) {
    timer({ func: randomSamplePnt, tick: 2500, tock: 2500, stop: 22500, endFunc: reShuffle });
  }
}

// TODO TEMP DISABLED
// runMapChanger();

function checkifMobile() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true;
  }
  return false;
}

function reShuffle() {
  pointList = shuffle(pointList);
  timer({ func: randomSamplePnt, tick: 2500, tock: 2500, stop: 22500, endFunc: reShuffle });
}

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
