let index = 0;

const anchors = document.querySelectorAll(".anchor");
const upButton = document.querySelector(".up");

const config = {
  root: null, // sets the framing element to the viewport
  rootMargin: "150px",
  threshold: 1,
};

const intersectionObserver = new IntersectionObserver(function (entries) {
  if (entries[0].intersectionRatio <= 0) return;
  index = entries[0].target.getAttribute("data-id");
}, config);

anchors.forEach((anchor) => {
  intersectionObserver.observe(anchor);
});

upButton.addEventListener("click", () => {
  if (index == 0) return;
  anchors[index - 1].scrollIntoView(true);
  index--;
});
