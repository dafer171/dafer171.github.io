const tempF = document.querySelector("#temp").textContent;
const speed = document.querySelector("#wind").textContent;

if (tempF <= 50 && speed >= 3.0) {
  let f =
    35.74 +
    0.6215 * tempF -
    35.75 * speed ** 0.16 +
    0.4275 * tempF * speed ** 0.16;
  document.querySelector("#windChill").textContent = f.toFixed(0);
} else {
  document.querySelector("#windChill").textContent = "N/A";
}
