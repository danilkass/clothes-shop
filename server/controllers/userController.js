const ApiError = require("../error/ApiError");
const { User } = require("../models/models");

class UserController {
  async registration(req, res) {}

  async login(req, res) {}

  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("Не задан ID"));
    }
    res.json(id);
  }

  async delete(req, res) {
    const { id } = req.body;
    const user = await User.destroy({ where: { id } });
    if (user) {
      return res.json({ message: "delete OK" });
    } else {
      return res.json({ message: "User not found" });
    }
  }
}

module.exports = new UserController();
