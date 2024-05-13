import listModalHandler from "./eventhandlers/listModal";
import todoModalHandler from "./eventhandlers/todoModal";
import modalCloser from "./eventhandlers/modalCloser";
import "./style.css";

const taskContainer = document.querySelector(".task-container");

listModalHandler();
todoModalHandler();
modalCloser();
