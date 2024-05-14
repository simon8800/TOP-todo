import Todo from "../modules/todo";
import createTodoCard from "../components/createTodoCard";
import { getActiveList } from "./activeList";

export default function todoModalHandler() {
  const todoModalButton = document.querySelector(".todo-modal-button");
  const todoModal = document.querySelector("#todo-modal");
  const todoModalCancelButton = document.querySelector("#todo-cancel-btn");
  const todoModalOkayButton = document.querySelector("#todo-ok-btn");
  const listModal = document.querySelector("#list-modal");
  const todoContainer = document.querySelector(".todos");
  const todoTitleInput = document.getElementById("todo-title");
  const todoNotesInput = document.getElementById("todo-notes");
  const todoDateInput = document.getElementById("todo-date");

  function createTodoFromForm() {
    let todoTitle = todoTitleInput.value;
    let todoNotes = todoNotesInput.value;
    let todoDate = todoDateInput.value;
    let todo = new Todo({
      title: todoTitle,
      notes: todoNotes,
      date: todoDate,
      list: getActiveList(),
    });
    return todo;
  }

  function clearTodoForm() {
    todoTitleInput.value = "";
    todoNotesInput.value = "";
    todoDateInput.value = "";
  }

  todoModalButton.onclick = function () {
    todoModal.style.display = "block";
  };

  todoModalCancelButton.onclick = function (event) {
    event.preventDefault();
    todoModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == todoModal || event.target == listModal) {
      let openModal = event.target == todoModal ? todoModal : listModal;
      openModal.style.display = "none";
    }
  };

  todoModalOkayButton.onclick = function (event) {
    event.preventDefault();
    if (todoTitleInput.value.length < 1) return;
    let todo = createTodoFromForm();
    let todoCard = createTodoCard(todo);
    todoContainer.appendChild(todoCard);
    clearTodoForm();
    todoModal.style.display = "none";
  };
}
