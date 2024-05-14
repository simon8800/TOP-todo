import { getActiveList, setActiveList } from "./activeList";
import createTodoCard from "../components/createTodoCard";
import storageAvailable from "../modules/storageChecker";

const LOCAL_STORAGE_GET_KEY = "todos";

export default function populateTodoContainer(list) {
  const todoContainer = document.querySelector(".todos");
  todoContainer.innerHTML = "";

  const todoHeader = document.querySelector(".todo-header");
  todoHeader.innerText = list.name;

  // Set activeList to clicked list
  setActiveList(list);
  let todos = getTodos(getActiveList());
  console.log(todos);
  console.log(todoContainer);
  todos.forEach((todo) => {
    let todoCard = createTodoCard(todo);
    todoContainer.appendChild(todoCard);
  });
}

function getTodos(list) {
  if (
    storageAvailable &&
    window.localStorage.getItem(LOCAL_STORAGE_GET_KEY) !== null
  ) {
    let todos = window.localStorage.getItem(LOCAL_STORAGE_GET_KEY);
    let todosData = JSON.parse(todos);
    if (list.id == "home") {
      // Home return all todos
      return todosData.filter((todo) => todo.done == false);
    } else if (list.id == "completed") {
      // Completed return completed todos
      return todosData.filter((todo) => todo.done == true);
    } else {
      // Return todos with list.id
      return todosData.filter((todo) => todo.list.id == list.id);
    }
  } else {
    return [];
  }
}
