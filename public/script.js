"use strict";var siteName=document.getElementById("name"),languages=document.getElementById("languages"),nav=document.getElementById("nav"),contacts=document.getElementById("contacts"),stylingElement=document.querySelector(".styling-element"),photoCopyright=document.querySelector(".photo-copyright");function moveElements(){setTimeout(function(){siteName.style.left="0"},1e3),setTimeout(function(){nav.style.left="0"},1500),setTimeout(function(){contacts.style.bottom="0",languages.style.top="0"},2e3),setTimeout(function(){stylingElement.style.opacity="1",photoCopyright.style.opacity="1"},4e3)}window.addEventListener("load",moveElements);var navbar=document.querySelectorAll("#nav a"),back=(stylingElement=document.querySelector(".styling-element"),document.getElementById("back")),front=document.getElementById("front"),aboutSection=document.getElementById("about"),portfolioSection=document.getElementById("portfolio"),projectsInfo=document.getElementById("projects-info"),closeIcon=document.getElementById("close");function showInfo(e){stylingElement.style.opacity="0",back.style.zIndex="10",front.style.display="block","about"!==e.target.className&&"portfolio"!==e.target.className||"block"!==projectsInfo.style.display?("about"===e.target.className?(portfolioSection.style.display="none",navbar[1].style.backgroundColor="transparent",aboutSection.style.display="block"):(aboutSection.style.display="none",navbar[0].style.backgroundColor="transparent",portfolioSection.style.display="flex"),e.target.style.backgroundColor="#00A1C0"):(aboutSection.style.display="none",portfolioSection.style.display="none")}function hideInfo(){aboutSection.style.display="none",navbar[0].style.backgroundColor="transparent",portfolioSection.style.display="none",navbar[1].style.backgroundColor="transparent",front.style.display="none",back.style.zIndex="0",stylingElement.style.opacity="1"}function showProjectTitle(e){e.target.children[1].classList.add("project__title-active")}function hideProjectTitle(e){e.target.children[1].classList.remove("project__title-active")}navbar.forEach(function(e){return e.addEventListener("click",showInfo)}),closeIcon.addEventListener("click",hideInfo),(projects=document.querySelectorAll(".project")).forEach(function(e){return e.addEventListener("mouseenter",showProjectTitle)}),projects.forEach(function(e){return e.addEventListener("mouseleave",hideProjectTitle)});portfolioSection=document.getElementById("portfolio");var projects=document.querySelectorAll(".project"),projectContent=(projectsInfo=document.getElementById("projects-info"),document.querySelectorAll(".project__content")),goBack=document.querySelectorAll(".go-back");closeIcon=document.getElementById("close");function showProject(){portfolioSection.style.display="none",closeIcon.style.display="none",projectsInfo.style.display="block";var o=this.classList[1];projectContent.forEach(function(e){var t=e.classList[1];o===t&&(e.style.display="flex")})}function goToPortfolio(){projectContent.forEach(function(e){return e.style.display="none"}),projectsInfo.style.display="none",closeIcon.style.display="block",portfolioSection.style.display="flex"}projects.forEach(function(e){return e.addEventListener("click",showProject)}),goBack.forEach(function(e){return e.addEventListener("click",goToPortfolio)});projectContent=document.querySelectorAll(".project__content");var index=1;function showSlides(e){var t=void 0,o=void 0;projectContent.forEach(function(e){"flex"===e.style.display&&(t=e.children[0].children,o=e.children[1].children[2].children)}),e>t.length&&(index=1),e<1&&(index=t.length);for(var n=0;n<t.length;n++)t[n].style.display="none",t[index-1].style.display="block";for(var l=0;l<o.length;l++)o[l].style.backgroundColor="#000",o[index-1].style.backgroundColor="#00A1C0"}function moveSlides(e){showSlides(index+=e)}function currentSlide(e){showSlides(index=e)}