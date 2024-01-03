const Router = require("express");
const subcategoryController = require("../controllers/subcategoryController");
const router = new Router();
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), subcategoryController.create);
router.get("/", subcategoryController.getAll);
router.delete("/", checkRole("ADMIN"), subcategoryController.delete);

module.exports = router;
