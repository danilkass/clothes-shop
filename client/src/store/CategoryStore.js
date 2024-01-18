import { makeAutoObservable } from "mobx";

export default class CategoryStore {
  constructor() {
    this._category = [
      { id: 1, name: "Одяг", sex: "M" },
      { id: 2, name: "Взуття", sex: "W" },
      { id: 3, name: "Аксессуари", sex: "M" },
    ];

    this._subcategory = [
      { id: 1, name: "Футболка", sex: "W" },
      { id: 2, name: "Шорты", sex: "M" },
      { id: 3, name: "Ремень", sex: "W" },
      { id: 4, name: "Свитеры", sex: "W" },
      { id: 5, name: "Жіноча білизна", sex: "M" },
      { id: 6, name: "Ремень", sex: "W" },
      { id: 7, name: "Кроссовки", sex: "W" },
      { id: 8, name: "Взуття", sex: "M" },
      { id: 9, name: "Шапки", sex: "W" },
      { id: 10, name: "Футболка", sex: "W" },
    ];

    this._selectedCategory = {};
    this._selectedSubcategory = {};

    makeAutoObservable(this);
  }

  setCategory(category) {
    this._category = category;
  }

  setSubcategory(subcategory) {
    this._subcategory = subcategory;
  }

  setSelectedCategory(category) {
    if (this._selectedCategory !== category) {
      this._selectedCategory = category;
      console.log(this._selectedCategory.name);
    }
  }

  setSelectedSubcategory(subcategory) {
    if (this._selectedSubcategory !== subcategory) {
      this._selectedSubcategory = subcategory;
      console.log(this._selectedSubcategory.name);
    }
  }

  get category() {
    return this._category;
  }

  get subcategory() {
    return this._subcategory;
  }

  get SelectedCategory() {
    return this._selectedCategory;
  }

  get SelectedSubategory() {
    return this._selectedSubcategory;
  }
}
