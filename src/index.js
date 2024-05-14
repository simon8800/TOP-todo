import listModalHandler from "./eventhandlers/listModal";
import todoModalHandler from "./eventhandlers/todoModal";
import modalCloser from "./eventhandlers/modalCloser";
import storageAvailable from "./modules/storageChecker";
import createListItem from "./components/createListItem";
import populateTodoContainer from "./eventhandlers/populateTodoContainer";
import List from "./modules/list";
import { setActiveList, getActiveList } from "./eventhandlers/activeList";
import "./style.css";

listModalHandler();
todoModalHandler();
modalCloser();

const listContainer = document.querySelector(".list-container");
const todoContainer = document.querySelector(".todo-container");
// Check if storage is available

if (storageAvailable) {
  let lists;
  let listsData;

  // If lists is there, get the data
  if (window.localStorage.getItem("lists") !== null) {
    lists = window.localStorage.getItem("lists");
    listsData = JSON.parse(lists);
    listsData.forEach((list) => {
      let listItem = createListItem(list);
      listContainer.appendChild(listItem);
    });
    let home = listsData.filter((list) => list.id == "home")[0];
    populateTodoContainer(home);
    // Else, populate with home and completed
  } else {
    let home = new List({ name: "🏠 Home", id: "home", color: "white" });
    new List({
      name: "✔︎ Completed",
      id: "completed",
      color: "white",
    });
    lists = window.localStorage.getItem("lists");
    listsData.forEach((list) => {
      let listItem = createListItem(list);
      listContainer.appendChild(listItem);
    });
    setActiveList(home);
  }
}
