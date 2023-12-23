const Router = require("express");
const categoryController = require("../controllers/categoryController");
const router = new Router();

router.post("/", categoryController.create);
router.get("/", categoryController.getAll);
router.delete("/", categoryController.delete);
module.exports = router;
