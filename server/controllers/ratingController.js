const { Rating } = require("../models/models");

class RatingController {
  async getReviewsById(req, res) {
    const { productId } = req.body;

    const reviews = await Rating.findAll({ where: { productId } });

    return res.json(reviews);
  }

  async setReview(req, res) {
    const { userId, productId, rate, comment } = req.body;

    const review = await Rating.create({
      userId,
      productId,
      rate,
      comment,
    });

    return res.json(review);
  }

  async changeReview(req, res) {
    const { id, newRate, newComment } = req.body;

    const review = await Rating.findOne({ where: { id } });

    const updateFields = {};
    if (newRate !== undefined) {
      updateFields.rate = newRate;
    }
    if (newComment !== undefined) {
      updateFields.comment = newComment;
    }

    const newReview = await review.update(updateFields);

    return res.json(newReview);
  }

  async removeReview(req, res) {
    const { id } = req.body;

    const review = await Rating.destroy({ where: { id } });

    return res.json({ message: "delete OK" });
  }
}

module.exports = new RatingController();
