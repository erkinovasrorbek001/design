"use strict";

var hamburger = document.getElementById("hamburger");
var wrapperlink = document.querySelector(".wrapper__list");
hamburger.addEventListener('click', function () {
  wrapperlink.classList.toggle('active');
});