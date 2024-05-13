// Takes a task object and returns a task item element
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

  todoCard.appendChild(todoTitle);
  todoCard.appendChild(todoNotes);
  todoCard.appendChild(todoDate);

  return todoCard;
}
