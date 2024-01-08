import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._product = [
      {
        id: 1,
        name: "штаны спортивные",
        price: 300,
        discount: 259,
        rating: "0",
        size: "S,M,L,XL",
      },
      { id: 2, name: "T-shirts", price: 449, discount: null, rating: 0, size: "S,M,L" },
      { id: 3, name: "Футболка", price: 359, discount: null, rating: 0, size: "S,M" },
    ];
    makeAutoObservable(this);
  }

  setProduct(product) {
    this._product = product;
  }

  get product() {
    return this._product;
  }
}
