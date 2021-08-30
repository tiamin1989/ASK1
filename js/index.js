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

/* Обработка форм */
const popupForm = document.querySelector("#popup-backcall-form");
const contactForm = document.querySelector("#footer__form");

/* Обработка формы обратного звонка */
popupForm.addEventListener("submit", async (evt) => {
  evt.preventDefault();
  console.log("test popupForm");

  let response = await fetch("http://xn--1-7sb4a1a.xn--p1ai/backcall.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: {
      userName: evt.target.querySelector("#backcall-name").value,
      phone: evt.target.querySelector("#backcall-phone").value,
    },
  });

  let result = await response.json();

  console.log("result", result);
});

/* Обработка контактной форм */
contactForm.addEventListener("submit", async (evt) => {
  evt.preventDefault();
  console.log("test contactForm");

  let response = await fetch("http://xn--1-7sb4a1a.xn--p1ai/sendmail.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: {
      userName: evt.target.querySelector("#name").value,
      mail: evt.target.querySelector("#mail").value,
      messsage: evt.target.querySelector("#messsage").value,
    },
  });

  let result = await response.json();

  console.log("result", result);
});