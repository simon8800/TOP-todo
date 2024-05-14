import populateTodoContainer from "../eventhandlers/populateTodoContainer";

// Takes list object and returns a ListItem element
export default function createListItem(list) {
  const listItem = document.createElement("div");
  listItem.classList.add("list");
  const listName = document.createElement("p");
  listName.innerText = list.name;
  listItem.id = list.id;
  listItem.appendChild(listName);

  listItem.onclick = function () {
    populateTodoContainer(list);
  };

  return listItem;
}
