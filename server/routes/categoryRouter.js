const Router = require("express");
const categoryController = require("../controllers/categoryController");
const router = new Router();
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), categoryController.create);
router.get("/", categoryController.getAll);
router.delete("/", checkRole("ADMIN"), categoryController.delete);

module.exports = router;
