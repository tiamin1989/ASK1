document
  .querySelector(".header__mobile-line")
  .addEventListener("click", function () {
    document
      .querySelector(".header__mobile-line .header__mobile-line-burger")
      .classList.toggle("active");
    document.querySelector(".header-wrapper").classList.toggle("active");
  });

const navbar = document.querySelector(".header");
const sticky = navbar.offsetTop;

function stickMenu() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
window.onscroll = function () {
  stickMenu();
};