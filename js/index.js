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

  /* Сообщения popup */
  const success = document.querySelector(".backcall-messsage_success");
  const fail = document.querySelector(".backcall-messsage_fail");
  const loading = document.querySelector(".popup-backcall__loading");

  popupForm.style.display = "none";
  loading.style.display = "flex";

  const backcall = {
    name: evt.target.querySelector("#backcall-name").value,
    phone: evt.target.querySelector("#backcall-phone").value,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(backcall),
  };

  fetch("../php/backcall.php", options)
    .then((res) => {
      if (res.ok) {
        loading.style.display = "none";
        success.style.display = "flex";
      } else {
        throw new Error("Ошибка");
      }
    })
    .catch(() => {
      loading.style.display = "none";
      fail.style.display = "flex";
    });
});

/* Обработка контактной форм */
contactForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  /* Сообщения popup */
  const success = document.querySelector(".footer__mail-message-success");
  const fail = document.querySelector(".footer__mail-message-fail");
  const loading = document.querySelector(".footer__mail-loading");

  const backmail = {
    name: evt.target.querySelector("#name").value,
    mail: evt.target.querySelector("#mail").value,
    message: evt.target.querySelector("#message").value,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(backmail),
  };

  contactForm.classList.remove("active");
  loading.classList.add("active");

  fetch("../php/sendemail.php", options)
    .then((res) => {
      if (res.ok) {
        loading.classList.remove("active");
        success.classList.add("active");
      } else {
        throw new Error("Ошибка");
      }
    })
    .catch(() => {
      loading.classList.remove("active");
      fail.classList.add("active");
    });
});
