import storageAvailable from "../modules/storageChecker";

const LOCAL_STORAGE_GET_KEY = "activeList";

function setActiveList(list) {
  if (storageAvailable) {
    window.localStorage.setItem(LOCAL_STORAGE_GET_KEY, JSON.stringify(list));
    return list;
  }
  return null;
}

function getActiveList() {
  if (
    storageAvailable &&
    window.localStorage.getItem(LOCAL_STORAGE_GET_KEY) !== null
  ) {
    return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_GET_KEY));
  }
  return null;
}

export { setActiveList, getActiveList };
