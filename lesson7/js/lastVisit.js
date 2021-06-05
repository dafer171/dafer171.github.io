localStorage.mytime = Date.now();
const lastVisit = localStorage.getItem("mytime");
//localStorage.setItem("mytime", value);

//const newVisit = localStorage.getItem("mytime");

//let timeSinceLastVisit = visit - newVisit;

document.getElementById("lastVisit").innerHTML = visit; //timeSinceLastVisit;
