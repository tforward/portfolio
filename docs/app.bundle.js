!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e,o){(function(o){var n;/*! smooth-scroll v14.2.1 | (c) 2018 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e,o=(this.document||this.ownerDocument).querySelectorAll(t),n=this;do{for(e=o.length;--e>=0&&o.item(e)!==n;);}while(e<0&&(n=n.parentElement));return n}),function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),o}if("function"==typeof window.CustomEvent)return!1;t.prototype=window.Event.prototype,window.CustomEvent=t}(),function(){for(var t=0,e=["ms","moz","webkit","o"],o=0;o<e.length&&!window.requestAnimationFrame;++o)window.requestAnimationFrame=window[e[o]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[o]+"CancelAnimationFrame"]||window[e[o]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,o){var n=(new Date).getTime(),r=Math.max(0,16-(n-t)),a=window.setTimeout(function(){e(n+r)},r);return t=n+r,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),function(o,r){void 0===(n=function(){return function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},o=function(){for(var t={},e=0;e<arguments.length;e++)!function(e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])}(arguments[e]);return t},n=function(e){return parseInt(t.getComputedStyle(e).height,10)},r=function(t){var e;try{e=decodeURIComponent(t)}catch(o){e=t}return e},a=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,o=String(t),n=o.length,r=-1,a="",i=o.charCodeAt(0);++r<n;){if(0===(e=o.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=e>=1&&e<=31||127==e||0===r&&e>=48&&e<=57||1===r&&e>=48&&e<=57&&45===i?"\\"+e.toString(16)+" ":e>=128||45===e||95===e||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122?o.charAt(r):"\\"+o.charAt(r)}var c;try{c=decodeURIComponent("#"+a)}catch(t){c="#"+a}return c},i=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},c=function(t){return t?n(t)+t.offsetTop:0},l=function(e,o,n,r){if(o.emitEvents&&"function"==typeof t.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:r}});document.dispatchEvent(a)}};return function(n,s){var d,u,m,f,p,h,g={cancelScroll:function(t){cancelAnimationFrame(h),h=null,t||l("scrollCancel",d)},animateScroll:function(n,r,a){var s=o(d||e,a||{}),u="[object Number]"===Object.prototype.toString.call(n),p=u||!n.tagName?null:n;if(u||p){var b=t.pageYOffset;s.header&&!m&&(m=document.querySelector(s.header)),f||(f=c(m));var w,y,v,C=u?n:function(e,o,n,r){var a=0;if(e.offsetParent)do{a+=e.offsetTop,e=e.offsetParent}while(e);return a=Math.max(a-o-n,0),r&&(a=Math.min(a,i()-t.innerHeight)),a}(p,f,parseInt("function"==typeof s.offset?s.offset(n,r):s.offset,10),s.clip),S=C-b,E=i(),T=0,j=function(e){w||(w=e),y=(T+=e-w)/parseInt(s.speed,10),v=b+S*function(t,e){var o;return"easeInQuad"===t.easing&&(o=e*e),"easeOutQuad"===t.easing&&(o=e*(2-e)),"easeInOutQuad"===t.easing&&(o=e<.5?2*e*e:(4-2*e)*e-1),"easeInCubic"===t.easing&&(o=e*e*e),"easeOutCubic"===t.easing&&(o=--e*e*e+1),"easeInOutCubic"===t.easing&&(o=e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t.easing&&(o=e*e*e*e),"easeOutQuart"===t.easing&&(o=1- --e*e*e*e),"easeInOutQuart"===t.easing&&(o=e<.5?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t.easing&&(o=e*e*e*e*e),"easeOutQuint"===t.easing&&(o=1+--e*e*e*e*e),"easeInOutQuint"===t.easing&&(o=e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e),t.customEasing&&(o=t.customEasing(e)),o||e}(s,y=y>1?1:y),t.scrollTo(0,Math.floor(v)),function(e,o){var a=t.pageYOffset;if(e==o||a==o||(b<o&&t.innerHeight+a)>=E)return g.cancelScroll(!0),function(e,o,n){0===e&&document.body.focus(),n||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),t.scrollTo(0,o))}(n,o,u),l("scrollStop",s,n,r),w=null,h=null,!0}(v,C)||(h=t.requestAnimationFrame(j),w=e)};0===t.pageYOffset&&t.scrollTo(0,0),function(t,e,o){u||history.pushState&&o.updateURL&&history.pushState({smoothScroll:JSON.stringify(o),anchor:t.id},document.title,t===document.documentElement?"#top":"#"+t.id)}(n,0,s),l("scrollStart",s,n,r),g.cancelScroll(!0),t.requestAnimationFrame(j)}}},b=function(e){if(!("matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches)&&0===e.button&&!e.metaKey&&!e.ctrlKey&&"closest"in e.target&&(u=e.target.closest(n))&&"a"===u.tagName.toLowerCase()&&!e.target.closest(d.ignore)&&u.hostname===t.location.hostname&&u.pathname===t.location.pathname&&/#/.test(u.href)){var o=a(r(u.hash)),i=d.topOnEmptyHash&&"#"===o?document.documentElement:document.querySelector(o);(i=i||"#top"!==o?i:document.documentElement)&&(e.preventDefault(),g.animateScroll(i,u))}},w=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(d)&&history.state.anchor){var e=document.querySelector(a(r(history.state.anchor)));e&&g.animateScroll(e,null,{updateURL:!1})}},y=function(t){p||(p=setTimeout(function(){p=null,f=c(m)},66))};return g.destroy=function(){d&&(document.removeEventListener("click",b,!1),t.removeEventListener("resize",y,!1),t.removeEventListener("popstate",w,!1),g.cancelScroll(),d=null,u=null,m=null,f=null,p=null,h=null)},g.init=function(n){if(!("querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";g.destroy(),d=o(e,n||{}),m=d.header?document.querySelector(d.header):null,f=c(m),document.addEventListener("click",b,!1),m&&t.addEventListener("resize",y,!1),d.updateURL&&d.popstate&&t.addEventListener("popstate",w,!1)},g.init(s),g}}(o)}.apply(e,[]))||(t.exports=n)}(void 0!==o?o:"undefined"!=typeof window?window:this)}).call(this,o(2))},function(t,e,o){"use strict";o.r(e),o(7),o(5);const n=function(t){const e=`<li class="card-item ${t.cardClass}">\n    <div class="card ${t.elemId}">\n      <div class="card-frame">\n      <a class="card-thumb" href="${t.demoUrl}" target="_blank" alt="Open demo of ${t.title}" aria-label="Open demo of ${t.title}">\n        <div class="card-img center-auto" alt="Image of ${t.title}" class="${t.imgClass}" style="background-image: url(./images/${t.imageName}.JPG)"></div>\n        </a>\n      </div>\n      <div class="card-content">\n        <h3 class="card-title">${t.title}</h3>\n        <p class="card-text">${t.tools}</p>\n        <a class="card-btn-link" target="_blank" aria-label="View code for ${t.codeUrl}">\n          <a class="noTextDecoration" href="${t.codeUrl}" target="_blank" alt="View code for ${t.codeUrl}" aria-label="View code for ${t.codeUrl}">\n            <div class="card-btn center-text">View Code</div>\n          </a>\n        </a>\n      </div>\n      </li>`;return Object.assign(Object.create(null),function(t){const e=Object.create(null);return e.addHtml=function(e){return e.insertAdjacentHTML("beforeend",t),e.lastChild},e}(e),function(){const t=Object.create(null);return t.addElem=function(t){const e=document.createDocumentFragment();return t.forEach(t=>{"DocumentFragment"===t.constructor.name||null!=t.constructor.name.match(/HTML\w*Element/)?e.appendChild(t):e.appendChild(t.elem)}),e},t}())};let r;var a=o(0),i=o.n(a);function c(t){let{func:e,tick:o,tock:n,time:r,stop:a,endFunc:i,initTime:c}=t;const l=performance.now();!function t(e,o,n,r,a,i,c){if(r>=a+n)return void i();r>=o&&(o+=n,e());const l=r-o;setTimeout(t.bind(null,e,o,n,r=performance.now(),a,i,c),l)}(e,o+=l,n,r=l,a+=l,i,c=l)}const l=function(){r=new L.Map("map",null,{fadeAnimation:!0,zoomAnimation:!1});const t=L.tileLayer("http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}",{attribution:"",subdomains:"abcd",minZoom:3,maxZoom:17,ext:"png",fadeAnimation:!0,zoomAnimation:!1,reuseTiles:!0});return r.setView(new L.LatLng(44.260389,-76.509219),9),r.addLayer(t),r.removeControl(r.zoomControl),r.touchZoom.disable(),r.doubleClickZoom.disable(),r.scrollWheelZoom.disable(),r.boxZoom.disable(),r.keyboard.disable(),r.dragging.disable(),r}(),s=Object.create(null);function d(t,e){const o=document.getElementsByClassName(t);for(let t=0;t<o.length;t+=1)o[t].classList.add(e)}function u(t,e){const o=document.getElementsByClassName(t);for(let t=0;t<o.length;t+=1)o[t].classList.remove(e)}function m(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function f(t){l.setView(t,9,!0)}function p(){f(h[Math.floor(Math.random()*h.length)])}s.initApplication=function(){const t=function(){const t=Object.create(null);return t.cardCalc=n({elemId:"card-id-calc",title:"Calculator",description:"A Responsive Formula Expression Logic Calculator",demoUrl:"https://tforward.github.io/JSCalculator/",codeUrl:"https://github.com/tforward/JSCalculator",tools:"CSS (Grid), JS (ESLint) A Responsive Formula Expression Logic Calculator",imageName:"calculator",imgClass:"card-img-portrait img-calculator",cardClass:"card-calc project"}),t.cardPomodoro=n({elemId:"card-id-pomodoro",title:"Pomodoro Clock",description:"A Responsive Pomodoro Clock",demoUrl:"https://tforward.github.io/fccPomodoro/",codeUrl:"https://github.com/tforward/fccPomodoro",imageName:"pomodoro",imgClass:"card-img-portrait",tools:"CSS (Flexbox, Grid), JS (ESLint, Webpack)",cardClass:"card-pomodoro project"}),t.cardTwitch=n({elemId:"card-id-twitch",title:"Twitch Viewer",description:"A Twitch API Responsive Viewer",demoUrl:"https://tforward.github.io/fccTwitchTV/",codeUrl:"https://github.com/tforward/fccTwitchTV",tools:"CSS (Flexbox), JS (ESLint, Webpack, Twitch API)",imageName:"twitch",imgClass:"card-img-landscape",cardClass:"card-twitch project"}),t.cardGridImage=n({elemId:"card-id-gridImage",title:"Grid 5x5",description:"A just for fun experiment with CSS Grid",demoUrl:"https://tforward.github.io/gridImage/",codeUrl:"https://github.com/tforward/gridImage",imageName:"grid5x5",imgClass:"card-img-portrait",tools:"CSS (Flexbox, Grid), JS (ESLint, Webpack)",cardClass:"card-gridImage fun"}),t.cardTicTac=n({elemId:"card-id-tictac",title:"Tic Tac Toe Game",description:"The always classic Tic Tac Toe!",demoUrl:"https://tforward.github.io/fccTicTacToe/",codeUrl:"https://github.com/tforward/fccTicTacToe",imageName:"tictac",imgClass:"card-img-portrait",tools:"CSS (Flexbox), JS (ESLint, Gulp)",cardClass:"card-tictac project"}),t.cardSimon=n({elemId:"card-id-simon",title:"Simon Game",description:"The classic 1980's game Simon",demoUrl:"https://tforward.github.io/fccSimon/",codeUrl:"https://github.com/tforward/fccSimon",imageName:"simon",imgClass:"card-img-portrait",tools:"CSS (Flexbox), JS (ESLint, Webpack)",cardClass:"card-simon project"}),t.cardLeafshoot=n({elemId:"card-id-leaf",title:"LeafShoot",description:"A responsive map template",demoUrl:"https://tforward.github.io/LeafShoot/",codeUrl:"https://github.com/tforward/LeafShoot",imageName:"leafshoot",imgClass:"card-img-landscape",tools:"CSS (Bootstrap), JS (Leaflet)",cardClass:"card-leaf project"}),t.cardQuote=n({elemId:"card-id-quote",title:"Random Quote Machine",description:"A random quote machine",demoUrl:"https://codepen.io/tforward/full/BZWqQp/",codeUrl:"https://codepen.io/tforward/pen/BZWqQp",imageName:"quote",imgClass:"card-img-portrait",tools:"CSS, JS",cardClass:"card-quote project"}),t.cardCBC=n({elemId:"card-id-cbc",title:"CSS Grid CBC Tribute Logo",description:"A CSS Grid tribute to the CBC logo",demoUrl:"https://codepen.io/tforward/full/JZavoY/",codeUrl:"https://codepen.io/tforward/pen/JZavoY",imageName:"cbc",imgClass:"card-img-portrait",tools:"CSS (Grid)",cardClass:"card-cbc fun"}),t.cardCutPolygon=n({elemId:"card-id-cutPolygon",title:"ArcPy: Cut Polygon by line(s)",description:"Cut a polygon by line(s)",demoUrl:"https://i.imgur.com/ZF6m98j.gifv",codeUrl:"https://github.com/tforward/CutPolygonByLines",imageName:"cutPolygon",imgClass:"card-img-portrait",tools:"Python, ArcPy",cardClass:"card-cutPolygon project"}),t.cardCalgaryMap=n({elemId:"card-id-calgaryMap",title:"Calgary Population Density",description:"Calgary Population Density",demoUrl:"http://tforward.github.io/calgary_pop_2014/",codeUrl:"https://github.com/tforward/calgary_pop_2014",imageName:"calgary_2014_pop",imgClass:"card-img-portrait",tools:"Bootstrap, Leaflet, QGIS",cardClass:"card-calgaryMap project"}),t}(),e=document.getElementById("projects"),o=document.createElement("ul");o.className="projects-grid cards",Object.keys(t).forEach(e=>{t[e].addHtml(o)}),e.appendChild(o);const r=function(){const t=Object.create(null);return t.initEvent=function(t,e,o){this.elem=document.getElementById(t),this.eventType=e,this.args=o,Array.isArray(o)&&(this.args=Object.assign({},o))},t.addEvent=function(t,e){this.boundFunc=t.bind(this.elem,this.args),this.boundOptions=e,this.elem.addEventListener(this.eventType,this.boundFunc,this.boundOptions)},t.removeEvent=function(){this.elem.removeEventListener(this.eventType,this.boundFunc,this.boundOptions)},t}();r.initEvent("eventSandbox","click",{tags:["BUTTON"]}),r.addEvent(function(t,e){const o=function(t,e){let o;const n=Array.from(t.path);let r=0;for(;r<n.length;r+=1)if(e.indexOf(n[r].tagName)>-1&&""!==(o=n[r].id))return o}(e,t.tags);void 0!==o&&o.startsWith("filter")&&function(t){document.getElementsByClassName("filter-selected")[0].classList.remove("filter-selected"),document.getElementById(t).classList.add("filter-selected"),function(t){"filter-projects"===t?(u("project","hidden-project"),d("fun","hidden-project"),d("blog","hidden-project")):"filter-fun"===t?(u("fun","hidden-project"),d("project","hidden-project"),d("blog","hidden-project")):"filter-all"===t&&(u("fun","hidden-project"),u("project","hidden-project"),u("blog","hidden-project"))}(t)}(o)})},new i.a("a[href*='#PortfolioStart']",{speed:800,clip:!0,easing:"easeInOutCubic"}),l.on("click",t=>{f(function(t,e){return new L.LatLng(t,e)}(m(49,56),m(-79,-125)))});let h=[[51.262485898428785,-68.74292437446594],[51.32145337655852,-68.9421481134463],[48.97540875705961,-68.4160813809419],[46.29254831561058,-77.1117600918794],[45.67228256021794,-81.7644700528169],[41.73306131785704,-82.98120562446594],[42.6750284167221,-79.24860010760777],[43.10766561995877,-79.53699175727844],[43.73207342008998,-76.37292898908373]];0==!!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&c({func:p,tick:2500,tock:2500,stop:22500,endFunc:function t(){h=function(t){let e,o,n=t.length;for(;0!==n;)o=Math.floor(Math.random()*n),e=t[n-=1],t[n]=t[o],t[o]=e;return t}(h),c({func:p,tick:2500,tock:2500,stop:22500,endFunc:t})}}),document.onreadystatechange=function(){"complete"===document.readyState&&s.initApplication()}},function(t,e){var o;o=function(){return this}();try{o=o||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(o=window)}t.exports=o},,,function(t,e,o){},,function(t,e,o){}]);
//# sourceMappingURL=app.bundle.js.map