const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const outputList = document.querySelector(".list");

button.addEventListener("click", () => {
  if (input.value != "") {
    let li = document.createElement("li");
    let deleleButton = document.createElement("button");

    li.textContent = input.value;
    input.value = "";
    deletebutton.textContent = "❌";

    li.append(deleteButton);
    outputList.append(li);

    input.focus();

    deleleButton.addEventListener("click", function (e) {
      outputList.removeChild(li);
    });
  }
});
