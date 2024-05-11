import List from "./modules/list";
import Todo from "./modules/todo";
import "./style.css";

const listContainer = document.querySelector(".list-container");
const taskContainer = document.querySelector(".task-container");
const listModalButton = document.querySelector(".list-modal-button");
const listModal = document.querySelector("#list-modal");

listModalButton.onclick = function () {
  listModal.style.display = "block";
};
