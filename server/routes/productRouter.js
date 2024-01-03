const Router = require("express");
const productController = require("../controllers/productController");
const checkRole = require("../middleware/checkRoleMiddleware");

const router = new Router();

router.post("/", checkRole("ADMIN"), productController.create);
router.get("/", productController.getAll);
router.get("/:id", productController.getOne);
router.delete("/", checkRole("ADMIN"), productController.delete);

module.exports = router;
