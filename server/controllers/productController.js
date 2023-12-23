const ApiError = require("../error/ApiError");
const { Product } = require("../models/models");

class ProductController {
  async create(req, res) {}

  async getAll(req, res) {}

  async getOne(req, res) {}

  async edit(req, res) {}

  async delete(req, res) {
    const { id } = req.body;
    const product = await Product.destroy({ where: { id } });
    if (product) {
      return res.json({ message: "delete OK" });
    } else {
      return res.json({ message: "Product not found" });
    }
  }
}

module.exports = new ProductController();
