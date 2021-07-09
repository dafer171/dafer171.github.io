const inputChapter = document.querySelector("#favchap");
const button = document.querySelector("button");
const outputList = document.querySelector(".list");

button.addEventListener("click", () => {
  if (inputChapter.value != "") {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");

    li.textContent = inputChapter.value;
    inputChapter.value = "";
    deleteButton.textContent = "❌";

    li.append(deleteButton);
    outputList.append(li);

    inputChapter.focus();

    deleteButton.onclick = function (e) {
      outputList.removeChild(li);
    };
  }
});
