const ApiError = require("../error/ApiError");
const { Subcategory } = require("../models/models");

class SubcategoryController {
  async create(req, res) {
    try {
      const { name, sex } = req.body;
      const subcategory = await Subcategory.create({ name, sex });
      return res.json(subcategory);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async getAll(req, res) {
    const subcategory = await Subcategory.findAll();
    return res.json(subcategory);
  }

  async delete(req, res) {
    const { id } = req.body;
    const subcategory = await Subcategory.destroy({ where: { id } });
    if (subcategory > 0) {
      return res.json({ message: "delete OK" });
    } else {
      return res.json({ message: "Subcategory not found" });
    }
  }
}

module.exports = new SubcategoryController();
