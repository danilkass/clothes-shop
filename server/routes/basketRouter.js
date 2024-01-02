const Router = require("express");
const router = new Router();
const basketController = require("../controllers/basketController");

router.get("/", basketController.getUserBasket);
router.post("/", basketController.addToBasket);
router.patch("/", basketController.updateBasketProduct);
router.delete("/", basketController.removeFromBasket);

module.exports = router;
