!function(e){function n(i){if(t[i])return t[i].exports;var o=t[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};return n.m=e,n.c=t,n.p="/",n(0)}({0:function(e,n,t){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}var n=t(414);e(n),t(329).install()}).call(this)}finally{}},329:function(e,n){function t(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname||0===window.location.hostname.indexOf("127."))}function i(e){if(e||(e={}),t())navigator.serviceWorker.register("/sw.js");else if(window.applicationCache){var n="/appcache/",i="manifest",o=function(){var e=n+i+".html",t=document.createElement("iframe");t.src=e,t.style.display="none",a=t,document.body.appendChild(t)};return void("complete"===document.readyState?setTimeout(o):window.addEventListener("load",o))}}function o(e,n){}function r(){if(t()&&navigator.serviceWorker.getRegistration().then(function(e){if(e)return e.update()}),a)try{a.contentWindow.applicationCache.update()}catch(e){}}var a;n.install=i,n.applyUpdate=o,n.update=r},414:function(e,n,t){try{(function(){"use strict";function e(){"serviceWorker"in navigator&&(self.addEventListener("install",function(e){e.waitUntil(self.skipWaiting())}),self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())}),window.addEventListener("load",function(){var e="service-worker.js";console.log(e),navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}))}function t(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}Object.defineProperty(n,"__esModule",{value:!0}),n.default=e,n.unregister=t}).call(this)}finally{}}});
//# sourceMappingURL=offline.js.map