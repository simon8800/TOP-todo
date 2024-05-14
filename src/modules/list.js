import { v4 as uuidv4 } from "uuid";
import storageAvailable from "./storageChecker";

const LOCAL_STORAGE_GET_KEY = "lists";

export default class List {
  constructor(options = {}) {
    const { name = "List name", color = "red", id = uuidv4() } = options;
    this.id = id;
    this.color = color;
    this.name = name;

    // Check if storage is available before storing
    if (
      storageAvailable &&
      window.localStorage.getItem(LOCAL_STORAGE_GET_KEY) !== null
    ) {
      let lists = window.localStorage.getItem(LOCAL_STORAGE_GET_KEY);

      let listsData = JSON.parse(lists);
      listsData.push(this);

      let listsDataJson = JSON.stringify(listsData);
      window.localStorage.setItem(LOCAL_STORAGE_GET_KEY, listsDataJson);
    } else {
      let initalList = JSON.stringify([this]);
      window.localStorage.setItem(LOCAL_STORAGE_GET_KEY, initalList);
    }
  }
}
