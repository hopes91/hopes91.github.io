!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach)}},function(e,t,n){n(2),n(3),n(4),n(5),e.exports=n(0)},function(e,t){var n=document.querySelector(".nav"),o=document.querySelector(".nav__portfolio"),r=document.querySelector(".nav__about");window.addEventListener("keydown",function(e){document.activeElement!==n&&document.activeElement!==o&&document.activeElement!==r||("ArrowUp"===e.key&&(r.blur(),o.focus()),"ArrowDown"===e.key&&(o.blur(),r.focus()))})},function(e,t,n){n(0)();window.addEventListener("load",function(){var e=document.querySelector(".my-name"),t=document.querySelector(".language"),n=document.querySelector(".nav"),o=document.querySelector(".contacts");setTimeout(function(){e.style.left="0"},0),setTimeout(function(){n.style.left="0"},500),setTimeout(function(){o.style.right="0",t.style.top="0"},1e3)})},function(e,t){var n=document.querySelectorAll(".nav li"),o=document.querySelector(".back"),r=document.querySelector(".back__close-icon"),c=document.querySelector(".portfolio"),u=document.querySelector(".about"),i=function(){var e=document.querySelectorAll(".portfolio__project");"block"===o.style.display?e.forEach(function(e){return e.setAttribute("tabindex","0")}):e.forEach(function(e){return e.setAttribute("tabindex","-1")})},l=function(e){"Enter"===e.key&&a(e)},a=function(e){o.style.display="block",r.setAttribute("tabindex","0"),i(),e.target.className.match("portfolio")?(c.style.display="block",u.style.display="none"):(c.style.display="none",u.style.display="block")},d=function(){o.style.display="none",c.style.display="none",u.style.display="none",r.setAttribute("tabindex","-1"),i()};n.forEach(function(e){return e.addEventListener("click",a)}),n.forEach(function(e){return e.addEventListener("keydown",l)}),r.addEventListener("click",d),r.addEventListener("keydown",function(e){"Enter"===e.key&&d()}),window.addEventListener("keydown",function(e){"Escape"===e.key&&d()})},function(e,t){var n=document.querySelectorAll(".portfolio__project"),o=function(e){"Enter"===e.key&&r(e)},r=function(e){var t=e.target.children[1];t.className.match("hidden")?t.classList.remove("portfolio__project-title_hidden"):t.classList.add("portfolio__project-title_hidden")};n.forEach(function(e){return e.addEventListener("keydown",o)}),n.forEach(function(e){return e.addEventListener("mouseenter",r)}),n.forEach(function(e){return e.addEventListener("mouseleave",r)})}]);