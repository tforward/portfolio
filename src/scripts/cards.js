import { ElemDelegator, FragmentDelegator } from "./olooElem";

const createCard = function card(data) {
  // Just use the same syntax for node elements
  const state = `<div id="${data.elemId}" class="card ${data.cardClass}">
        <div class="card-thumb ${data.cardThumbSize}" style="background-image: url(../images/${data.imageName}.jpg)">
        <a class="card-content" href="${data.demoUrl}" target="_blank">
          <div class="card-thumb-overlay center">
              <div class="card-btn-holder center">
    <a class="noTextDecoration" href="${
      data.demoUrl
    }" target="_blank"><button class="card-btn demo center noSelect">Demo</button></a><a class="noTextDecoration" href="${
    data.codeUrl
  }" target="_blank"><button class="card-btn code center noSelect">Code</button></a></div></div></div>
    </a>
    <article class="card-article">
        <h4 class="card-title">${data.title}</h4>
        <span class="card-toolbox">${data.tools}</span>
    </article>
  </div>`;

  // If you add an object to create it will show up on the __proto__
  // for that object, default null.
  return Object.assign(Object.create(null), ElemDelegator(state), FragmentDelegator(state));
};

export function defineCards() {
  const card = Object.create(null);

  card.cardCalc = createCard({
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

  card.cardTwitch = createCard({
    elemId: "card-twitch",
    title: "Twitch Viewer",
    description: "A Twitch API Responsive Viewer",
    demoUrl: "https://tforward.github.io/fccTwitchTV/",
    codeUrl: "https://github.com/tforward/fccTwitchTV",
    tools: "HTML, CSS (Flexbox), JS (ESLint, Webpack, Twitch API)",
    imageName: "twitch",
    imgClass: "card-img-landscape",
    cardClass: "card"
  });

  card.cardPomodoro = createCard({
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

  card.cardGridImage = createCard({
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

  card.cardSimon = createCard({
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

  card.cardTicTac = createCard({
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

  card.cardLeafshoot = createCard({
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

  card.cardCBC = createCard({
    elemId: "card-cbc",
    title: "CSS Grid CBC Tribue Logo",
    description: "A CSS Grid tribute to the CBC logo",
    demoUrl: "https://codepen.io/tforward/full/JZavoY/",
    codeUrl: "https://codepen.io/tforward/pen/JZavoY",
    imageName: "cbc",
    imgClass: "card-img-portrait",
    tools: "HTML, CSS (Grid)",
    cardClass: "card"
  });

  card.cardQuote = createCard({
    elemId: "card-quote",
    title: "Random Quote Machine",
    description: "A random quote machine",
    demoUrl: "https://codepen.io/tforward/full/BZWqQp/",
    codeUrl: "https://codepen.io/tforward/pen/BZWqQp",
    imageName: "quote",
    imgClass: "card-img-portrait",
    tools: "HTML, CSS, JS",
    cardClass: "card"
  });

  card.cardCutPolygon = createCard({
    elemId: "card-cutPolygon",
    title: "ArcPy tool: Cut Polygon by line(s)",
    description: "Cut a polygon by line(s)",
    demoUrl: "https://i.imgur.com/ZF6m98j.gifv",
    codeUrl: "https://github.com/tforward/CutPolygonByLines",
    imageName: "cutPolygon",
    imgClass: "card-img-portrait",
    tools: "Python, ArcPy",
    cardClass: "card"
  });

  return card;
}
