const button = document.querySelector(".input__button");
const input = document.querySelector(".input__text");
const card = document.querySelector(".card__container");

button.addEventListener("click", handleClick);

const todoList = [];

function handleClick() {
  addItemToList(input.value);
}

function createItem(text) {
  const li = document.createElement("li");
  li.className = "card__container__item";
  li.innerText = text;
  return li;
}

function addItemToList(item) {
  card.innerHTML = "";
  todoList.push(item);
  todoList.forEach((el) => {
    card.innerHTML += createItem(el);
  });
}
