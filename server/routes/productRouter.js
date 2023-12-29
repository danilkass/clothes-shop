const Router = require("express");
const productController = require("../controllers/productController");

const router = new Router();

router.post("/", productController.create);
router.get("/", productController.getAll);
router.get("/:id", productController.getOne);

router.delete("/", productController.delete);

module.exports = router;
