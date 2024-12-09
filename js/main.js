const hamburger = document.getElementById("hamburger");
const wrapperlink = document.querySelector(".wrapper__list");

hamburger.addEventListener('click', ()=>{
    wrapperlink.classList.toggle('active')
} )