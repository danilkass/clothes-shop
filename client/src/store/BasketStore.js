import { makeAutoObservable } from "mobx";

export default class BasketStore {
  constructor() {
    this._basket = [
      {
        id: 1,
        name: "штаны спортивные",
        price: 300,
        discount: 259,
        size: "M",
        count: 1,
      },
      { id: 2, name: "Футболка", price: 359, discount: null, size: "M", count: 3 },
    ];
    makeAutoObservable(this);
  }

  setBasket(basket) {
    this._basket = basket;
  }

  get basket() {
    return this._basket;
  }
}
