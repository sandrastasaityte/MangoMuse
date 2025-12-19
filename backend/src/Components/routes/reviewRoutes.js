// src/Components/routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const reviewController = require('../Controllers/reviewController.js');

router.get('/', reviewController.getReviews);

module.exports = router;
