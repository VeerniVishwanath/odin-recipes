const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", () => {
  const inputBox = document.querySelector("#inputItem");
  const inputText = inputBox.value;
  inputBox.value = "";
  const list = document.querySelector(".list");
  const delBtn = document.createElement("button");
  delBtn.setAttribute("class", "delButton");
  delBtn.innerText = "Delete";

  const listItem = document.createElement("li");
  listItem.innerText = inputText;

  listItem.append(delBtn);
  list.append(listItem);

  inputBox.focus();

  delBtn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    inputBox.focus();
  });
});
