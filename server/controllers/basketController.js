const { Basket, BasketProduct } = require("../models/models");

const { User, Product } = require("../models/models"); //УДАЛИТЬ ВМЕСТЕ С ПРОВЕРКОЙ

class BasketController {
  async addToBasket(req, res) {
    const { userId, productId, quantity, size } = req.body;

    const basket = await Basket.findOne({ where: { userId } });

    //НЕ ОБЯЗАТЕЛЬНЫЕ ПРОВЕРКИ
    const checkUser = await User.findOne({ where: { id: userId } });
    const checkProduct = await Product.findOne({ where: { id: productId } });
    if (!checkUser) {
      return res.status(400).json({ message: "Not found User" });
    } else if (!checkProduct) {
      return res.status(400).json({ message: "Not found Product" });
    }
    //НЕ ОБЯЗАТЕЛЬНЫЕ ПРОВЕРКИ

    const basketProduct = await BasketProduct.create({
      basketId: basket.id,
      productId,
      quantity,
      size,
    });

    return res.json(basketProduct);
  }

  async getUserBasket(req, res) {
    const { userId } = req.body;
    const basket = await Basket.findOne({ where: { userId } });
    const basketProducts = await BasketProduct.findAll({ where: { basketId: basket.id } });

    return res.json(basketProducts);
  }

  async updateBasketProduct(req, res) {
    const { id, newQuantity } = req.body;

    const basketProduct = await BasketProduct.findOne({ where: { id } });

    if (!basketProduct) {
      return res.status(404).json({ message: "Product in Basket not found" });
    }

    await basketProduct.update({ quantity: newQuantity });

    return res.json(basketProduct);
  }

  async removeFromBasket(req, res) {
    const { id } = req.body;

    const basketProduct = await BasketProduct.findOne({ where: { id } });

    if (!basketProduct) {
      return res.json({ message: "Product in Basket not found" });
    }

    await BasketProduct.destroy({ where: { id } });

    return res.json({ message: "Delete OK" });
  }
}

module.exports = new BasketController();
