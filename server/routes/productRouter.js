const Router = require("express");
const productController = require("../controllers/productController");

const router = new Router();

router.post("/");
router.get("/");
router.get("/:id");

router.delete("/", productController.delete);

module.exports = router;
