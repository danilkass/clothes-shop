const Router = require("express");
const router = new Router();
const productRouter = require("./productRouter");
const userRouter = require("./userRouter");
const categoryRouter = require("./categoryRouter");
const subcategoryRouter = require("./subcategoryRouter");

router.use("/user", userRouter);
router.use("/category", categoryRouter);
router.use("/subcategory", subcategoryRouter);
router.use("/product", productRouter);

module.exports = router;
