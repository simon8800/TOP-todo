export default function modalCloser() {
  const listModal = document.querySelector("#list-modal");
  const todoModal = document.querySelector("#todo-modal");

  window.onclick = function (event) {
    if (event.target == todoModal || event.target == listModal) {
      let openModal = event.target == todoModal ? todoModal : listModal;
      openModal.style.display = "none";
    }
  };
}
