import { loadPopupGallery } from "./popup-gallery.js";

const images = document.querySelectorAll(".photo-gallery__photo");

images.forEach((image, i, array) => {
  image.addEventListener("click", () => loadPopupGallery(array, i));
});
