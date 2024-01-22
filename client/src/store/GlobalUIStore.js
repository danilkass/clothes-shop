import { makeAutoObservable } from "mobx";

export default class GlobalUIStore {
  constructor() {
    this._itemsGrid = true;
    makeAutoObservable(this);
  }

  setItemsGrid(bool) {
    this._itemsGrid = bool;
  }

  get itemsGrid() {
    return this._itemsGrid;
  }
}
