const form = document.querySelector(".input");
const input = document.querySelector(".input__text");
const list = document.querySelector(".list");

window.onload = () => {
  const items = getItems();
  if (!items) return;
  if (items && items.length > 0) items.map((el) => addItemToList(el.text));
};

form.addEventListener("submit", addItem);

function getItems() {
  const previusValue = window.localStorage.getItem("items");
  return JSON.parse(previusValue);
}

function saveItem(item) {
  if (getItems()) {
    const data = getItems();
    data.push(item);
    window.localStorage.setItem("items", JSON.stringify(data));
  } else {
    window.localStorage.setItem("items", JSON.stringify([item]));
  }
}

function addItem(e) {
  e.preventDefault();
  addItemToList(input.value);
  const value = {
    text: input.value,
    id: "",
  };
  saveItem(value);
  input.value = "";
}

function removeItem(el, button) {
  button.removeEventListener("click", () => {});
  el.remove();
}

function createCheckBox(li) {
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.classList.add("list__checkbox");
  checkBox.addEventListener("change", () => changeCheckBox(checkBox, li));
  return checkBox;
}

function createItem(text) {
  const li = document.createElement("li");
  const textNode = document.createTextNode(text);
  li.className = "list__item";
  li.appendChild(createCheckBox(li));
  li.appendChild(textNode);
  li.appendChild(createButton("X", li));
  return li;
}

function createButton(text, el) {
  const button = document.createElement("button");
  button.addEventListener("click", removeItem.bind("asd", el, button));
  button.className = "list__button";
  button.innerHTML = text;
  return button;
}

function changeCheckBox(checkBox, li) {
  if (checkBox.checked) {
    li.classList.add("list__item--state-completed");
  } else {
    li.classList.remove("list__item--state-completed");
  }
}

function addItemToList(item) {
  list.appendChild(createItem(item));
}
