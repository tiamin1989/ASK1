const popup = document.querySelector(".popup-gallery");
const gallery = document.querySelector(".popup-gallery__slides");
const close = document.querySelector(".popup-gallery__close");
const left = document.querySelector(".popup-gallery__left");
const right = document.querySelector(".popup-gallery__right");

let currentImageIndex = 0;
let currentImages;

function toRight() {
  if (currentImageIndex === currentImages.length - 1) return;
  currentImages[currentImageIndex].classList.remove("active");
  currentImageIndex++;
  currentImages[currentImageIndex].classList.add("active");
}

function toLeft() {
  if (currentImageIndex === 0) return;
  currentImages[currentImageIndex].classList.remove("active");
  currentImageIndex--;
  currentImages[currentImageIndex].classList.add("active");
}

function closeGallery() {
  popup.classList.remove("active");
  currentImages[currentImageIndex].classList.remove("active");
  gallery.replaceChildren();
  left.removeEventListener("click", toLeft);
  right.removeEventListener("click", toRight);
  close.removeEventListener("click", closeGallery);
}

export function loadPopupGallery(images, index) {
  currentImageIndex = index;
  images.forEach((image, i) => {
    const li = document.createElement("li");
    li.classList.add("popup-gallery__slide");

    if (index === i) li.classList.add("active");

    const img = document.createElement("img");
    img.src = image.getAttribute("data-full-image");
    img.alt = image.getAttribute("alt");
    img.classList.add("popup-gallery__slide-image");

    li.append(img);
    gallery.append(li);
  });
  popup.classList.add("active");

  currentImages = gallery.querySelectorAll(".popup-gallery__slide");
  left.addEventListener("click", toLeft);
  right.addEventListener("click", toRight);
  close.addEventListener("click", closeGallery);
}


