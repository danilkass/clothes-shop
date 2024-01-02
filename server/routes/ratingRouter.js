const Router = require("express");
const router = new Router();
const ratingController = require("../controllers/ratingController");

router.get("/", ratingController.getReviewsById);
router.post("/", ratingController.setReview);
router.patch("/", ratingController.changeReview);
router.delete("/", ratingController.removeReview);

module.exports = router;
