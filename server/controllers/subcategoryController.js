const ApiError = require("../error/ApiError");
const { Subcategory } = require("../models/models");

class SubcategoryController {
  async create(req, res) {}

  async getAll(req, res) {}

  async delete(req, res) {
    const { id } = req.body;
    const subcategory = await Subcategory.destroy({ where: { id } });
    if (subcategory) {
      return res.json({ message: "delete OK" });
    } else {
      return res.json({ message: "Subcategory not found" });
    }
  }
}

module.exports = new SubcategoryController();
