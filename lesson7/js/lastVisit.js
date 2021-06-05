localStorage.mytime = Date.now();
const visit = localStorage.getItem("mytime");
//const lastVisit = localStorage.setItem("mytime");

//const newVisit = localStorage.getItem("mytime");

//let timeSinceLastVisit = visit - newVisit;

document.getElementById("lastVisit").innerHTML = visit; //timeSinceLastVisit;
