"use strict";var siteName=document.getElementById("name"),languages=document.getElementById("languages"),contacts=document.getElementById("contacts");function moveElements(){setTimeout(function(){siteName.style.left="0"},0),setTimeout(function(){nav.style.left="0"},500),setTimeout(function(){contacts.style.right="0",languages.style.top="0"},1e3)}window.addEventListener("load",moveElements);var anchorElements=document.querySelectorAll('[href^="#"]');function scrollToAnchor(e){e.preventDefault();var r=1,c=window.pageYOffset,i=this.href.replace(/[^#]*(.*)/,"$1"),a=document.querySelector(i).getBoundingClientRect().top,l=null;requestAnimationFrame(function e(t){null===l&&(l=t);var n=t-l;var o=a<0?Math.max(c-n/r,c+a):Math.min(c+n/r,c+a);window.scrollTo(0,o);o!==c+a?requestAnimationFrame(e):location.hash=i})}anchorElements.forEach(function(e){return e.addEventListener("click",scrollToAnchor)});var arrowUp=document.getElementById("arrow-up");function showHideArrowUp(){window.pageYOffset>window.innerHeight/4?arrowUp.style.opacity="1":0===window.pageYOffset&&(arrowUp.style.opacity="0")}window.addEventListener("scroll",showHideArrowUp);var projects=document.querySelectorAll(".project");function showProjectTitle(e){e.target.children[1].classList.add("project__title-active")}function hideProjectTitle(e){e.target.children[1].classList.remove("project__title-active")}projects.forEach(function(e){return e.addEventListener("mouseenter",showProjectTitle)}),projects.forEach(function(e){return e.addEventListener("mouseleave",hideProjectTitle)});