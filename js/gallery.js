const gap = 100;
let currentImageIndex = 0;
let currentXposition = 0;

const gallery = document.querySelector(".gallery__slides");
const images = document.querySelectorAll(".gallery__slide-image");
const dots = document.querySelectorAll(".gallery__bullet");

const leftIcon = document.querySelector(".gallery__to-left");
const rightIcon = document.querySelector(".gallery__to-right");

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
window.addEventListener('resize', resizeShiftDistance, true);

toDot(1);
