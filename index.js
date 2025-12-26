
const toggle = document.querySelector('.menu_btn'); 
const bar = document.querySelector(".item");


toggle.addEventListener('click', tooglemynav);

function tooglemynav() {
  // event.preventDefault();
  bar.classList.toggle("active");
}

const cross = document.querySelector('.close')
cross.addEventListener('click', closemynav);
function closemynav() {

  bar.classList.toggle("active");
}

let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let j;
  let slides = document.getElementsByClassName("mySlides");
  for (j = 0; j < slides.length; j++) {
    slides[j].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {slideIndex1 = 1}
  slides[slideIndex1-1].style.display = "block";
  setTimeout(showSlides1, 5000); 
}

const button = document.getElementById('signup-btn');

button.addEventListener('click', loginpage)

function loginpage() {
  window.location.href = 'login.html';
}

const sidenav = document.querySelector('.prdct'); 
const menubar = document.querySelector("#product-navbar");


sidenav.addEventListener('click', showmynav);

function showmynav() {
  menubar.classList.toggle("active");
  bar.classList.toggle("active");
}
const cross1 = document.querySelector('.close1')
cross1.addEventListener('click', showmynav);



const scrollContainer = document.getElementById('scroll-container');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');


const scrollAmount = 500; 

rightBtn.addEventListener('click', function(event)  {
    event.preventDefault();
    scrollContainer.scrollBy({
      left: scrollAmount, 
      behavior: 'smooth'  
    });
});


leftBtn.addEventListener('click', function(event) {
    event.preventDefault();
    scrollContainer.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
});
