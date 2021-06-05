localStorage.mytime = Date.now();
const visit = localStorage.getItem("mytime");

let timeSinceLastVisit = visit - visit;

document.getElementById("lastVisit").innerHTML = timeSinceLastVisit;
