let map;
const lat = 44.260389;
const lng = -76.509219;
const zoom = 9;

export function initmap() {
  // set up the map
  map = new L.Map("map", null, { zoomControl: false });

  // create the tile layer with correct attribution
  const stamenWatercolor = L.tileLayer("http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}", {
    attribution: "",
    subdomains: "abcd",
    minZoom: 3,
    maxZoom: 17,
    ext: "png",
    fadeAnimation: true
  });

  // start the map location
  map.setView(new L.LatLng(lat, lng), zoom);
  map.addLayer(stamenWatercolor);
  map.removeControl(map.zoomControl);

  return map;
}
