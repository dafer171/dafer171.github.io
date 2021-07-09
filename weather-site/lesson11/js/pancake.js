const date = new Date();
document.querySelector("#currentYear").innerHTML = date.getFullYear();
document.querySelector("#LastUpdated").textContent = document.lastModified;
const pancakes = document.querySelector(".pancakes");
const dayOfWeek = date.getDay();
if (dayOfWeek == 5) {
  pancakes.style.display = "block";
} else {
  pancakes.style.display = "none";
}