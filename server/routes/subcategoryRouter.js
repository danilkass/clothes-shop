const Router = require("express");
const subcategoryController = require("../controllers/subcategoryController");
const router = new Router();

router.post("/", subcategoryController.create);
router.get("/", subcategoryController.getAll);
router.delete("/", subcategoryController.delete);

module.exports = router;
