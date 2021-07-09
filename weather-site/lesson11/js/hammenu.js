//Ham button menu//
const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navi");
hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);
window.onresize = () => {
  if (window.innerWidth > 760) mainnav.classList.remove("responsive");
};
