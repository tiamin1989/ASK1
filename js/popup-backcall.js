const backcall = document.querySelector(".header__contacts-button");
const popup = document.querySelector(".popup-backcall");
const close = document.querySelector(".popup-backcall__close");

const togglePopup = () => popup.classList.toggle("active");

backcall.addEventListener("click", togglePopup);
close.addEventListener("click", togglePopup);
