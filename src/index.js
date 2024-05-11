import List from "./modules/list";
import Todo from "./modules/todo";
import "./style.css";

const listContainer = document.querySelector(".list-container");
const taskContainer = document.querySelector(".task-container");

// Modal logic
const listModalButton = document.querySelector(".list-modal-button");
const listModal = document.querySelector("#list-modal");
const listModalCancelButton = document.querySelector("#list-cancel-btn");
const listModalOkayButton = document.querySelector("#list-ok-btn");

listModalButton.onclick = function () {
  listModal.style.display = "block";
};

listModalCancelButton.onclick = function () {
  listModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == listModal) {
    listModal.style.display = "none";
  }
};

listModalOkayButton.onclick = function (event) {
  event.preventDefault();
  let listName = document.getElementById("list-name");
  let listColor = document.getElementById("list-color");
  let newList = new List({ name: listName, color: listColor });
};
