import { v4 as uuidv4 } from "uuid";
import storageAvailable from "./storageChecker";
import { getActiveList } from "../eventhandlers/activeList";

const LOCAL_STORAGE_GET_KEY = "todos";

export default class Todo {
  constructor(options = {}) {
    const {
      title = "Todo title",
      notes = "",
      priority = "none",
      date = new Date(),
      list,
    } = options;
    this.id = uuidv4();
    this.done = false;
    this.title = title;
    this.notes = notes;
    this.priority = priority;
    this.date = date;
    this.list = getActiveList();
    if (
      storageAvailable &&
      window.localStorage.getItem(LOCAL_STORAGE_GET_KEY) !== null
    ) {
      let todos = window.localStorage.getItem(LOCAL_STORAGE_GET_KEY);
      todos = JSON.parse(todos);
      todos.push(this);
      let todosJson = JSON.stringify(todos);
      window.localStorage.setItem(LOCAL_STORAGE_GET_KEY, todosJson);
    } else {
      window.localStorage.setItem(
        LOCAL_STORAGE_GET_KEY,
        JSON.stringify([this])
      );
    }
  }

  toggleDone() {
    this.done = !this.done;
  }
}
