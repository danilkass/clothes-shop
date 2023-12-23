const Router = require("express");
const subcategoryController = require("../controllers/subcategoryController");
const router = new Router();

router.post("/");
router.get("/");
router.delete("/", subcategoryController.delete);

module.exports = router;
