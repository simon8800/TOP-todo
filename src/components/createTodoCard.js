// Takes a task object and returns a task item element
const LOCAL_STORAGE_TODOS_KEY = "todos";

export default function createTodoCard(todo) {
  const todoCard = document.createElement("div");
  todoCard.classList.add("todo-card");
  todoCard.id = todo.id;

  const todoTitle = document.createElement("p");
  todoTitle.classList.add("todo-title");
  todoTitle.innerText = todo.title;

  const todoNotes = document.createElement("p");
  todoNotes.classList.add("todo-notes");
  todoNotes.innerText = todo.notes;

  const todoDate = document.createElement("p");
  todoDate.classList.add("todo-date");
  todoDate.innerText = todo.date;

  const todoToggle = document.createElement("input");
  todoToggle.classList.add("todo-checkbox");
  todoToggle.type = "checkbox";
  if (todo.done) {
    todoToggle.checked = true;
  } else {
    todoTitle.checked = false;
  }
  todoToggle.onclick = function (event) {
    let isDone = event.target.checked;
    todo.done = isDone;

    let todoList = window.localStorage.getItem(LOCAL_STORAGE_TODOS_KEY);
    todoList = JSON.parse(todoList);

    todoList = todoList.map((currentTodo) => {
      if (currentTodo.id == todo.id) {
        return todo;
      } else {
        return currentTodo;
      }
    });

    todoList = JSON.stringify(todoList);
    window.localStorage.setItem(LOCAL_STORAGE_TODOS_KEY, todoList);
  };

  todoCard.appendChild(todoToggle);
  todoCard.appendChild(todoTitle);
  todoCard.appendChild(todoNotes);
  todoCard.appendChild(todoDate);

  return todoCard;
}
