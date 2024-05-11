import { v4 as uuidv4 } from "uuid";

export default class List {
  constructor(options = {}) {
    const { name = "List name" } = options;
    this.id = uuidv4();
    this.name = name;
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(todo) {
    this.todos = this.todos.filter((currentTodo) => currentTodo.id != todo.id);
  }
}
