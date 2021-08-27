function beforeAfter() {
  const compares = document.querySelectorAll(".split-image__compare");
  const inputs = document.querySelectorAll(".split-image-slider");
  for (let i = 0; i < compares.length; i++) {
    compares[i].style.width = inputs[i].value + "%";
  }
}

window.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const bullets = document.querySelectorAll(".split-image__bullet");
  const items = document.querySelectorAll(".split-image__item");
  bullets.forEach((bullet, i) => {
    bullet.addEventListener("click", () => {
      bullets[currentIndex].classList.remove("active");
      items[currentIndex].classList.remove("active");
      currentIndex = i;
      bullets[i].classList.add("active");
      items[i].classList.add("active");
    });
  });
});
