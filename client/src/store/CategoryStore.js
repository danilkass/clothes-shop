import { makeAutoObservable } from "mobx";

export default class CategoryStore {
  constructor() {
    this._category = [
      { id: 1, name: "Верхній одяг", sex: "M" },
      { id: 2, name: "Нижній одяг", sex: "W" },
      { id: 3, name: "Аксессуари", sex: "M" },
    ];

    this._subcategory = [
      { id: 1, name: "Футболка", sex: "W" },
      { id: 2, name: "Шорты", sex: "M" },
      { id: 3, name: "Ремень", sex: "W" },
    ];

    makeAutoObservable(this);
  }

  setCategory(category) {
    this._category = category;
  }

  setSubcategory(subcategory) {
    this._subcategory = subcategory;
  }

  get category() {
    return this._category;
  }

  get subcategory() {
    return this._subcategory;
  }
}
