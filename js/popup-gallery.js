const popup = document.querySelector(".popup-gallery");
const gallery = document.querySelector(".popup-gallery__slides");
const close = document.querySelector(".popup-gallery__close");
const left = document.querySelector(".popup-gallery__left");
const right = document.querySelector(".popup-gallery__right");

let currentImageIndex = 0;
let currentImages = [];

const changeImageIndex = (index) => {
  currentImageIndex = index;
  if (index === 0) left.classList.remove("active");
  else left.classList.add("active");
  if (index === currentImages.length - 1) right.classList.remove("active");
  else right.classList.add("active");
};

function toRight() {
  if (currentImageIndex === currentImages.length - 1) return;
  currentImages[currentImageIndex].classList.remove("active");
  changeImageIndex(currentImageIndex + 1);
  currentImages[currentImageIndex].classList.add("active");
}

function toLeft() {
  if (currentImageIndex === 0) return;
  currentImages[currentImageIndex].classList.remove("active");
  changeImageIndex(currentImageIndex - 1);
  currentImages[currentImageIndex].classList.add("active");
}

function closeGallery() {
  popup.classList.remove("active");
  currentImages[currentImageIndex].classList.remove("active");
  gallery.replaceChildren();
  currentImages = [];
  left.removeEventListener("click", toLeft);
  right.removeEventListener("click", toRight);
  close.removeEventListener("click", closeGallery);
}

export function loadPopupGallery(images, index, evt) {
  changeImageIndex(index);
  images.forEach((image, i) => {
    const li = document.createElement("li");
    li.classList.add("popup-gallery__slide");

    if (index === i) li.classList.add("active");

    const figure = document.createElement("figure");
    figure.classList.add("popup-gallery__slide-figure");

    const img = document.createElement("img");
    img.src = image.getAttribute("data-full-image");
    img.alt = image.getAttribute("alt");
    img.classList.add("popup-gallery__slide-image");
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = image.getAttribute("data-caption");
    figcaption.classList.add("popup-gallery__caption");

    figure.append(img);
    figure.append(figcaption);

    li.append(figure);
    gallery.append(li);
  });
  popup.classList.add("active");

  currentImages = gallery.querySelectorAll(".popup-gallery__slide");
  left.addEventListener("click", toLeft);
  right.addEventListener("click", toRight);
  close.addEventListener("click", closeGallery);
}
