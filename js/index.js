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
popupForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  fetch("../php/backcall.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: {
      name: evt.target.querySelector("#backcall-name").value,
      phone: evt.target.querySelector("#backcall-phone").value,
    },
  })
    .then((res) => {
      if (res.statusText === "OK") {
        console.log("OK");
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
});

/* Обработка контактной форм */
contactForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log("test contactForm");

  fetch("../php/sendmail.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: {
      name: evt.target.querySelector("#name").value,
      mail: evt.target.querySelector("#mail").value,
      messsage: evt.target.querySelector("#messsage").value,
    },
  })
    .then((res) => {
      if (res.statusText === "OK") {
        console.log("OK");
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
});
