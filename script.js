"use strict";var siteName=document.getElementById("name"),languages=document.getElementById("languages"),nav=document.getElementById("nav"),contacts=document.getElementById("contacts"),copyright=document.querySelector(".photo-copyright");function moveElements(){setTimeout(function(){siteName.style.left="0"},0),setTimeout(function(){nav.style.left="0"},500),setTimeout(function(){contacts.style.left="0",languages.style.top="0"},1e3),setTimeout(function(){copyright.style.opacity="1"},2e3)}window.addEventListener("load",moveElements);var anchorElements=document.querySelectorAll('[href^="#"]');function scrollToAnchor(e){e.preventDefault();var c=1,l=window.pageYOffset,i=this.href.replace(/[^#]*(.*)/,"$1"),r=document.querySelector(i).getBoundingClientRect().top,a=null;requestAnimationFrame(function e(t){null===a&&(a=t);var o=t-a;var n=null;n=r<0?Math.max(l-o/c,l+r):Math.min(l+o/c,l+r);window.scrollTo(0,n);n!==l+r?requestAnimationFrame(e):location.hash=i})}anchorElements.forEach(function(e){return e.addEventListener("click",scrollToAnchor)});var arrowUp=document.getElementById("arrow-up");function showHideArrowUp(){window.pageYOffset>window.innerHeight/4?arrowUp.style.display="inline-block":window.pageYOffset<=100&&(arrowUp.style.display="none")}window.addEventListener("scroll",showHideArrowUp);var navBar=document.querySelectorAll("#nav"),backDiv=document.getElementById("back"),aboutSection=document.getElementById("about"),portfolioSection=document.getElementById("portfolio"),closeIcon=document.getElementById("closeBack"),showInfo=function(e){backDiv.style.display="block","about"===e.target.className?(portfolioSection.style.display="none",aboutSection.style.display="flex"):(aboutSection.style.display="none",portfolioSection.style.display="block")},hideInfo=function(){aboutSection.style.display="none",portfolioSection.style.display="none",backDiv.style.display="none"};navBar.forEach(function(e){return e.addEventListener("click",showInfo)}),closeIcon.addEventListener("click",hideInfo);var projects=document.querySelectorAll(".project");function showProjectTitle(e){e.target.children[1].classList.add("project__title-active")}function hideProjectTitle(e){e.target.children[1].classList.remove("project__title-active")}projects.forEach(function(e){return e.addEventListener("mouseenter",showProjectTitle)}),projects.forEach(function(e){return e.addEventListener("mouseleave",hideProjectTitle)});