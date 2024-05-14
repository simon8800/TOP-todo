import List from "../modules/list";
import createListItem from "../components/createListItem";

export default function listModalHandler() {
  const listModalButton = document.querySelector(".list-modal-button");
  const listModal = document.querySelector("#list-modal");
  const listModalCancelButton = document.querySelector("#list-cancel-btn");
  const listModalOkayButton = document.querySelector("#list-ok-btn");
  const listContainer = document.querySelector(".list-container");
  const listNameInput = document.getElementById("list-name");
  const listColorInput = document.getElementById("list-color");

  function createListFromForm() {
    let listName = listNameInput.value;
    let listColor = listColorInput.value;
    let list = new List({ name: listName, color: listColor });
    return list;
  }

  function clearListForm() {
    listNameInput.value = "";
    listColorInput.value = "";
    return;
  }

  listModalButton.onclick = function () {
    listModal.style.display = "block";
  };

  listModalCancelButton.onclick = function (event) {
    event.preventDefault();
    listModal.style.display = "none";
  };

  listModalOkayButton.onclick = function (event) {
    event.preventDefault();
    if (listNameInput.value.length < 1) return;
    let list = createListFromForm();
    let listElement = createListItem(list);
    listContainer.appendChild(listElement);
    clearListForm();
    listModal.style.display = "none";
  };
}
