// pick all of the images and layer them based on the z-index
const slideArea = document.querySelector('div.slideshow');
const images = slideArea.querySelectorAll('img');

// we want to keep track of two things
let currentSlide = 0;
let z = 1;

// when I click the slide area, change the slide based on z-index
slideArea.addEventListener('click', function () {
  currentSlide++;
  z++;

  if (currentSlide > images.length - 1) {
    currentSlide = 0;
  }

  // pick the right image
  images[currentSlide].style.zIndex = z;
});

console.log(images);
