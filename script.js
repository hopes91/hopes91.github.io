"use strict";var siteName=document.getElementById("name"),languages=document.getElementById("languages"),contacts=document.getElementById("contacts");function moveElements(){setTimeout(function(){siteName.style.left="0"},0),setTimeout(function(){nav.style.left="0"},500),setTimeout(function(){contacts.style.right="0",languages.style.top="0"},1e3)}window.addEventListener("load",moveElements);var anchorElements=document.querySelectorAll('[href^="#"]');function scrollToAnchor(e){e.preventDefault();var l=1,c=window.pageYOffset,i=this.href.replace(/[^#]*(.*)/,"$1"),a=document.querySelector(i).getBoundingClientRect().top,r=null;requestAnimationFrame(function e(t){null===r&&(r=t);var o=t-r;var n=null;n=a<0?Math.max(c-o/l,c+a):Math.min(c+o/l,c+a);window.scrollTo(0,n);n!==c+a?requestAnimationFrame(e):location.hash=i})}anchorElements.forEach(function(e){return e.addEventListener("click",scrollToAnchor)});var arrowUp=document.getElementById("arrow-up");function showHideArrowUp(){window.pageYOffset>window.innerHeight/4?arrowUp.style.display="inline-block":window.pageYOffset<=100&&(arrowUp.style.display="none")}window.addEventListener("scroll",showHideArrowUp);var navBar=document.querySelectorAll("#nav"),backDiv=document.getElementById("back"),aboutSection=document.getElementById("about"),portfolioSection=document.getElementById("portfolio"),closeIcon=document.getElementById("closeBack"),showInfo=function(e){backDiv.style.display="block","about"===e.target.className?(portfolioSection.style.display="none",aboutSection.style.display="flex"):(aboutSection.style.display="none",portfolioSection.style.display="block")},hideInfo=function(){aboutSection.style.display="none",portfolioSection.style.display="none",backDiv.style.display="none"};navBar.forEach(function(e){return e.addEventListener("click",showInfo)}),closeIcon.addEventListener("click",hideInfo);var projects=document.querySelectorAll(".project");function showProjectTitle(e){e.target.children[1].classList.add("project__title-active")}function hideProjectTitle(e){e.target.children[1].classList.remove("project__title-active")}projects.forEach(function(e){return e.addEventListener("mouseenter",showProjectTitle)}),projects.forEach(function(e){return e.addEventListener("mouseleave",hideProjectTitle)});