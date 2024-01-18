import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._product = [
      {
        id: 1,
        name: "штаны спортивные",
        price: 300,
        discount: 259,
        rating: "5",
        size: "S,M,L,XL",
        img: "https://exso.com.ua/wp-content/uploads/2021/06/5520orange.jpeg",
      },
      {
        id: 2,
        name: "T-shirts",
        price: 449,
        discount: null,
        rating: 2,
        size: "S,M,L",
        img: "https://exso.com.ua/wp-content/uploads/2021/06/5520orange.jpeg",
      },
      {
        id: 3,
        name: "Футболка",
        price: 549,
        discount: 249,
        rating: 4,
        size: "S,M",
        img: "https://exso.com.ua/wp-content/uploads/2021/06/5520orange.jpeg",
      },
      {
        id: 4,
        name: "Худи NIKE",
        price: 359,
        discount: null,
        rating: 0,
        size: "S,M",
        img: "https://exso.com.ua/wp-content/uploads/2021/06/5520orange.jpeg",
      },
      {
        id: 5,
        name: "Супер товар с очень длинным названием отлично отображаеться даа",
        price: 359,
        discount: null,
        rating: 4,
        size: "S,M",
        img: "https://exso.com.ua/wp-content/uploads/2021/06/5520orange.jpeg",
      },
      {
        id: 6,
        name: "Худи NIKE",
        price: 359,
        discount: null,
        rating: 3.5,
        size: "S,M",
        img: "https://exso.com.ua/wp-content/uploads/2021/06/5520orange.jpeg",
      },
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
