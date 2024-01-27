import { makeAutoObservable } from "mobx";

export default class CatalogSettings {
  constructor() {
    this._itemsGrid = "big";
    makeAutoObservable(this);

    // Загрузка сохраненных значений из локального хранилища
    const storedItemsGrid = localStorage.getItem("itemsGrid");
    if (storedItemsGrid) {
      this._itemsGrid = storedItemsGrid;
    }
  }

  setItemsGrid(value) {
    this._itemsGrid = value;

    // Сохранение значения в локальное хранилище
    localStorage.setItem("itemsGrid", value);
  }

  get itemsGrid() {
    return this._itemsGrid;
  }
}
