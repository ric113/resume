(()=>{var t={590:()=>{}},e={};function r(a){var o=e[a];if(void 0!==o)return o.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,r),n.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";r(590),function(){function t(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],t("js",new Date),t("config","UA-158624586-1");const e=localStorage.getItem("rhResumeMode"),r=document.querySelector("body"),a=document.querySelector(".switch");let o;"dark"===e?(o=!0,a.setAttribute("style","justify-content: flex-end"),r.setAttribute("data-theme","dark")):(o=!1,r.setAttribute("data-theme","light")),a.addEventListener("click",(function(t){o=!o,o?(r.setAttribute("data-theme","dark"),a.setAttribute("style","justify-content: flex-end"),localStorage.setItem("rhResumeMode","dark")):(r.setAttribute("data-theme","light"),a.setAttribute("style",""),localStorage.setItem("rhResumeMode","light"))}))}()})()})();