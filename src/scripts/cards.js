import { ElemDelegator, FragmentDelegator } from "./olooElem";

const createCard = function card(data) {
  // Just use the same syntax for node elements

  const state = `<li class="${data.cardClass}">
  <div id="${data.elemId}">
    <div class="card-frame">
      <a class="card-thumb" href="${data.demoUrl}" target="_blank" alt="Open demo of ${
    data.title
  }" aria-label="Open demo of ${data.title}">
        <div class="card-img" style="background-image: url(../images/${data.imageName}.jpg)"></div>
      </a>
    </div>
    <div class="card-info center-text">
      <h4 class="card-title">${data.title}</h4>
      <h7 class="card-toolbox">${data.tools}</h7>
    </div>
    <div class="card-footer center">
      <a class="noTextDecoration" href="${data.codeUrl}" target="_blank" alt="View code for ${
    data.codeUrl
  }" aria-label="View code for ${data.codeUrl}">
        <div class="card-btn card-btn-text center">CODE</div>
      </a>
    </div>
  </div>
</li>`;

  // If you add an object to create it will show up on the __proto__
  // for that object, default null.
  return Object.assign(Object.create(null), ElemDelegator(state), FragmentDelegator(state));
};

export function defineCards() {
  const card = Object.create(null);

  card.cardCalc = createCard({
    elemId: "card-id-calc",
    title: "Calculator",
    description: "A Responsive Formula Expression Logic Calculator",
    demoUrl: "https://tforward.github.io/JSCalculator/",
    codeUrl: "https://github.com/tforward/JSCalculator",
    tools: "CSS (Grid), JS (ESLint)",
    imageName: "calculator",
    imgClass: "card-img-portrait",
    cardClass: "card card-calc project"
  });

  card.cardPomodoro = createCard({
    elemId: "card-id-pomodoro",
    title: "Pomodoro Clock",
    description: "A Responsive Pomodoro Clock",
    demoUrl: "https://tforward.github.io/fccPomodoro/",
    codeUrl: "https://github.com/tforward/fccPomodoro",
    imageName: "pomodoro",
    imgClass: "card-img-portrait",
    tools: "CSS (Flexbox, Grid), JS (ESLint, Webpack)",
    cardClass: "card card-pomodoro project"
  });

  card.cardTwitch = createCard({
    elemId: "card-id-twitch",
    title: "Twitch Viewer",
    description: "A Twitch API Responsive Viewer",
    demoUrl: "https://tforward.github.io/fccTwitchTV/",
    codeUrl: "https://github.com/tforward/fccTwitchTV",
    tools: "CSS (Flexbox), JS (ESLint, Webpack, Twitch API)",
    imageName: "twitch",
    imgClass: "card-img-landscape",
    cardClass: "card card-twitch project"
  });

  card.cardGridImage = createCard({
    elemId: "card-id-gridImage",
    title: "Grid 5x5",
    description: "A just for fun experiment with CSS Grid",
    demoUrl: "https://tforward.github.io/gridImage/",
    codeUrl: "https://github.com/tforward/gridImage",
    imageName: "grid5x5",
    imgClass: "card-img-portrait",
    tools: "CSS (Flexbox, Grid), JS (ESLint, Webpack)",
    cardClass: "card card-gridImage fun"
  });

  card.cardTicTac = createCard({
    elemId: "card-id-tictac",
    title: "Tic Tac Toe Game",
    description: "The always classic Tic Tac Toe!",
    demoUrl: "https://tforward.github.io/fccTicTacToe/",
    codeUrl: "https://github.com/tforward/fccTicTacToe",
    imageName: "tictac",
    imgClass: "card-img-portrait",
    tools: "CSS (Flexbox), JS (ESLint, Gulp)",
    cardClass: "card card-tictac project"
  });

  card.cardSimon = createCard({
    elemId: "card-id-simon",
    title: "Simon Game",
    description: "The classic 1980's game Simon",
    demoUrl: "https://tforward.github.io/fccSimon/",
    codeUrl: "https://github.com/tforward/fccSimon",
    imageName: "simon",
    imgClass: "card-img-portrait",
    tools: "CSS (Flexbox), JS (ESLint, Webpack)",
    cardClass: "card card-simon project"
  });

  card.cardLeafshoot = createCard({
    elemId: "card-id-leaf",
    title: "LeafShoot",
    description: "A responsive map template",
    demoUrl: "https://tforward.github.io/LeafShoot/",
    codeUrl: "https://github.com/tforward/LeafShoot",
    imageName: "leafshoot",
    imgClass: "card-img-landscape",
    tools: "CSS (Bootstrap), JS (Leaflet)",
    cardClass: "card card-leaf project"
  });

  card.cardQuote = createCard({
    elemId: "card-id-quote",
    title: "Random Quote Machine",
    description: "A random quote machine",
    demoUrl: "https://codepen.io/tforward/full/BZWqQp/",
    codeUrl: "https://codepen.io/tforward/pen/BZWqQp",
    imageName: "quote",
    imgClass: "card-img-portrait",
    tools: "CSS, JS",
    cardClass: "card card-quote project"
  });

  card.cardCBC = createCard({
    elemId: "card-id-cbc",
    title: "CSS Grid CBC Tribute Logo",
    description: "A CSS Grid tribute to the CBC logo",
    demoUrl: "https://codepen.io/tforward/full/JZavoY/",
    codeUrl: "https://codepen.io/tforward/pen/JZavoY",
    imageName: "cbc",
    imgClass: "card-img-portrait",
    tools: "CSS (Grid)",
    cardClass: "card card-cbc fun"
  });

  card.cardCutPolygon = createCard({
    elemId: "card-id-cutPolygon",
    title: "ArcPy: Cut Polygon by line(s)",
    description: "Cut a polygon by line(s)",
    demoUrl: "https://i.imgur.com/ZF6m98j.gifv",
    codeUrl: "https://github.com/tforward/CutPolygonByLines",
    imageName: "cutPolygon",
    imgClass: "card-img-portrait",
    tools: "Python, ArcPy",
    cardClass: "card card-cutPolygon project"
  });

  card.cardCalgaryMap = createCard({
    elemId: "card-id-calgaryMap",
    title: "Calgary Population Density",
    description: "Calgary Population Density 2014",
    demoUrl: "http://tforward.github.io/calgary_pop_2014/",
    codeUrl: "https://github.com/tforward/calgary_pop_2014",
    imageName: "Calgary_2014_Pop",
    imgClass: "card-img-portrait",
    tools: "Bootstrap, Leaflet, QGIS",
    cardClass: "card card-calgaryMap project"
  });

  return card;
}
