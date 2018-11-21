let map;
const lat = 44.260389;
const lng = -76.509219;
const zoom = 9;

function initmap() {
  // set up the map
  map = new L.Map("map", null, { zoomControl: false });

  // create the tile layer with correct attribution
  const stamenWatercolor = L.tileLayer("http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}", {
    attribution: "",
    subdomains: "abcd",
    minZoom: 3,
    maxZoom: 17,
    ext: "png"
  });

  // start the map location
  map.setView(new L.LatLng(lat, lng), zoom);
  map.addLayer(stamenWatercolor);
  map.removeControl(map.zoomControl);
}

initmap();

function getLeafListPts(pointList) {
  const leafListPts = [];
  pointList.forEach(i => {
    const p = new L.LatLng(i[0], i[1]);
    leafListPts.push(p);
  });
  return leafListPts;
}

function panTimer(points) {
  let sec = 0;
  setInterval(() => {
    if (sec < points.length) {
      map.panTo(points[sec]);
      sec += 1;
    }
  }, 1300);
}

function randomIntMinMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const x1 = randomIntMinMax(46, 68);
const y1 = randomIntMinMax(-56, -139);

console.log(x1);
console.log(y1);

// const pointList = [[44.331223, -76.235374], [44.329787, -76.252932], [44.327638, -76.275248], [44.325579, -76.302456]];

const pointList = [[x1, y1]];

const leafList = getLeafListPts(pointList);

panTimer(leafList);
