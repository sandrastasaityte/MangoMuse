// src/Components/Controllers/reviewController.js
const { reviews } = require('../data/reviewsData.js');


exports.getReviews = (req, res) => {
  res.json(reviews);
};
