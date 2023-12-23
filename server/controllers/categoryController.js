const ApiError = require("../error/ApiError");
const { Category } = require("../models/models");

class CategoryController {
  async create(req, res) {
    const { name, sex } = req.body;
    const category = await Category.create({ name, sex });
    return res.json(category);
  }

  async getAll(req, res) {
    const category = await Category.findAll();
    return res.json(category);
  }

  async delete(req, res) {
    const { id } = req.body;
    const category = await Category.destroy({ where: { id } });
    if (category) {
      return res.json({ message: "delete OK" });
    } else {
      return res.json({ message: "Category not found" });
    }
  }
}

module.exports = new CategoryController();
