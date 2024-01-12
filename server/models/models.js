const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketProduct = sequelize.define("basket_product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
  size: { type: DataTypes.STRING },
});

const Product = sequelize.define("product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  discount: { type: DataTypes.INTEGER },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  size: { type: DataTypes.STRING },
});

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
  comment: { type: DataTypes.STRING },
});

const ProductInfo = sequelize.define("product_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

const Images = sequelize.define("images", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  img: { type: DataTypes.STRING, allowNull: false },
  color: { type: DataTypes.STRING, defaultValue: "not indicated" },
});

const Category = sequelize.define("category", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  sex: { type: DataTypes.STRING },
});

const Subcategory = sequelize.define("subcategory", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  sex: { type: DataTypes.STRING },
});

const CategorySubcategory = sequelize.define("category_subcategory", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Product.hasMany(Rating);
Rating.belongsTo(Product);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Product.hasMany(ProductInfo, { as: "info", onDelete: "CASCADE" });
ProductInfo.belongsTo(Product);

Product.hasMany(Images, { as: "img", onDelete: "CASCADE" });
Images.belongsTo(Product);

// Product.hasMany(ProductVariation);
// ProductVariation.belongsTo(Product);

// Color.hasMany(ProductVariation);
// ProductVariation.belongsTo(Color);

// ProductVariation.hasMany(Images);
// Images.belongsTo(ProductVariation);

Category.hasMany(Product);
Product.belongsTo(Category);

Subcategory.hasMany(Product);
Product.belongsTo(Subcategory);

Category.belongsToMany(Subcategory, { through: CategorySubcategory });
Subcategory.belongsToMany(Category, { through: CategorySubcategory });

module.exports = {
  User,
  Basket,
  BasketProduct,
  Product,
  Rating,
  ProductInfo,
  Images,
  //   ProductVariation,
  //   Color,
  Category,
  Subcategory,
  CategorySubcategory,
};
