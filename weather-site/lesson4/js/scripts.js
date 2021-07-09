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
const date = new Date();
document.querySelector("#currentYear").innerHTML = date.getFullYear();
document.querySelector("#LastUpdated").textContent = document.lastModified;
