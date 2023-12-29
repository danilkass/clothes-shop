const uuid = require("uuid");
const path = require("path");
const fs = require("fs");
const ApiError = require("../error/ApiError");
const { Product, ProductInfo, Images } = require("../models/models");
const { model } = require("../db");

class ProductController {
  async create(req, res, next) {
    try {
      const { name, price, discount, categoryId, subcategoryId, info, color } = req.body;
      let { img } = req.files;

      const product = await Product.create({
        name,
        price,
        discount,
        categoryId,
        subcategoryId,
      });

      if (info) {
        let parsedInfo = JSON.parse(info);
        parsedInfo.forEach((i) =>
          ProductInfo.create({
            title: i.title,
            description: i.description,
            productId: product.id,
          })
        );
      }

      const generateFileName = () => {
        return uuid.v4() + ".jpg";
      };

      if (!Array.isArray(img)) {
        img = [img];
      }

      img.map((i, index) => {
        let fileName = generateFileName();
        i.mv(path.resolve(__dirname, "..", "static", fileName));

        Images.create({
          img: fileName,
          productId: product.id,
          color: JSON.parse(color)[index],
        });
      });

      return res.json(product);
    } catch (e) {
      console.error("Error creating product:", e);
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { id },
      include: [
        { model: ProductInfo, as: "info" },
        { model: Images, as: "img" },
      ],
    });
    return res.json(product);
  }

  async getAll(req, res) {
    let { categoryId, subcategoryId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;

    let offset = page * limit - limit;

    let products;
    if (!categoryId && !subcategoryId) {
      products = await Product.findAndCountAll({ limit, offset });
    }
    if (categoryId && !subcategoryId) {
      products = await Product.findAndCountAll({ where: { categoryId }, limit, offset });
    }
    if (!categoryId && subcategoryId) {
      products = await Product.findAndCountAll({ where: { subcategoryId }, limit, offset });
    }
    if (categoryId && subcategoryId) {
      products = await Product.findAndCountAll({
        where: { categoryId, subcategoryId },
        limit,
        offset,
      });
    }

    return res.json(products);
  }

  // Реализовать удаление файла с папки static
  async delete(req, res, next) {
    try {
      const { id } = req.body;

      // Получите информацию о продукте, чтобы получить связанные изображения
      const product = await Product.findByPk(id, { include: ["img"] });

      // Удаляйте изображения из папки static
      if (product > 0) {
        product.img.forEach((image) => {
          const imagePath = path.resolve(__dirname, "..", "static", image.img);
          // Удаление файла
          fs.unlinkSync(imagePath);
        });
      }

      await Product.destroy({ where: { id } });
      await ProductInfo.destroy({ where: { productId: id } });
      await Images.destroy({ where: { productId: id } });

      return res.json({ message: "delete OK" });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ProductController();
