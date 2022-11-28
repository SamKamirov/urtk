// Carousel

let slideIndex = 1;
showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// // function showSlides(n) {
// //   let i;
// //   let slides = document.getElementsByClassName("mySlides");
// //   let dots = document.getElementsByClassName("dot");
// //   if (n > slides.length) {slideIndex = 1}
// //   if (n < 1) {slideIndex = slides.length}
// //   for (i = 0; i < slides.length; i++) {
// //     slides[i].style.display = "none";
// //   }
// //   for (i = 0; i < dots.length; i++) {
// //     dots[i].className = dots[i].className.replace(" active", "");
// //   }
// //   slides[slideIndex-1].style.display = "block";
// //   dots[slideIndex-1].className += " active";
// // }
// let slideIndex = 0;
// showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

//Menu

const toggleMenu = () => {
    const toggle = document.querySelector('.toggle__menu')
    const menu = document.querySelector('.menu')
    const infoMenu = document.querySelector('.menu--show')

    toggle.addEventListener('click', ()=> {
        menu.classList.toggle('menu--active')    
    })

    infoMenu.addEventListener('click', ()=> {
      menu.classList.toggle('menu--active')  
    })
}

toggleMenu()

