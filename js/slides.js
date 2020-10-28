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

  // remove the animation from the style from EVERY image (reset animation)
  images.forEach(image => {
    image.style.animation = '';
  });

  // pick the right image
  images[currentSlide].style.zIndex = z;

  // add fade animation to current image
  images[currentSlide].style.animation = 'fade 0.6s';
});

// when I hover mouse over slideshow area, put all
// of the images in a random place
slideArea.addEventListener('mouseover', function () {
  images.forEach(image => {
    const x = 100 * Math.random() - 50;
    const y = 100 * Math.random() - 50;

    image.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// when I move my mouse away, put the images back
slideArea.addEventListener('mouseout', function () {
  images.forEach(image => {
    image.style.transform = '';
  });
});
