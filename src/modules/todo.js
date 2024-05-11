import { v4 as uuidv4 } from "uuid";

export default class Todo {
  constructor(options = {}) {
    const {
      title = "Todo title",
      notes = "",
      priority = "none",
      date = new Date(),
    } = options;
    this.id = uuidv4();
    this.done = false;
    this.title = title;
    this.notes = notes;
    this.priority = priority;
    this.date = date;
  }

  toggleDone() {
    this.done = !this.done;
  }
}
