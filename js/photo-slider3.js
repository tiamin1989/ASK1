import { loadPopupGallery } from "./popup-gallery.js";

const gap = 100;
let currentImageIndex = 0;
let currentXposition = 0;

const container = document.querySelector("#slider3");
const dotContainer = document.querySelector("#bullets3");

const gallery = container.querySelector(".photo-slider__slides");
const images = container.querySelectorAll(".photo-slider__slide-image");
const dots = dotContainer.querySelectorAll(".photo-slider__bullet");

const leftIcon = container.querySelector(".photo-slider__to-left");
const rightIcon = container.querySelector(".photo-slider__to-right");

let initialX = null;
let initialY = null;

function getImageWidth() {
  return images[0].offsetWidth;
}

let shiftDistance = getImageWidth() + gap;

function toRight() {
  if (currentImageIndex === images.length - 1) return;
  images[currentImageIndex].classList.toggle("active");
  dots[currentImageIndex].classList.toggle("active");
  currentImageIndex++;
  currentXposition -= shiftDistance;
  images[currentImageIndex].classList.toggle("active");
  dots[currentImageIndex].classList.toggle("active");
  gallery.style.transform = `translate(${currentXposition}px)`;
}

function toLeft() {
  if (currentImageIndex === 0) return;
  images[currentImageIndex].classList.toggle("active");
  dots[currentImageIndex].classList.toggle("active");
  currentImageIndex--;
  currentXposition += shiftDistance;
  images[currentImageIndex].classList.toggle("active");
  dots[currentImageIndex].classList.toggle("active");
  gallery.style.transform = `translate(${currentXposition}px)`;
}

function toDot(index) {
  if (currentImageIndex === index) return;
  dots[index].classList.toggle("active");
  if (currentImageIndex < index) {
    while (currentImageIndex !== index) toRight();
  }
  if (currentImageIndex > index) {
    while (currentImageIndex !== index) toLeft();
  }
  currentImageIndex = index;
  dots[currentImageIndex].classList.toggle("active");
}

function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
}

function moveTouch(e) {
  if (initialX === null) return;
  if (initialY === null) return;

  let currentX = e.touches[0].clientX;
  let currentY = e.touches[0].clientY;

  let diffX = initialX - currentX;
  let diffY = initialY - currentY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) toRight();
    else toLeft();
  }
  initialX = null;
  initialY = null;
  e.preventDefault();
}

function resizeShiftDistance() {
  toDot(0);
  shiftDistance = getImageWidth() + gap;
  toDot(1);
}

rightIcon.addEventListener("click", toRight);
leftIcon.addEventListener("click", toLeft);
gallery.addEventListener("touchstart", startTouch, false);
gallery.addEventListener("touchmove", moveTouch, false);
dots.forEach((dot, i) => dot.addEventListener("click", () => toDot(i)));
window.addEventListener("resize", resizeShiftDistance, true);

images.forEach((image, i, array) => {
  image.addEventListener("click", () => loadPopupGallery(array, i));
});

toDot(1);
