const express = require('express');
const router = express.Router();
const cakeController = require('../Controllers/cakeController.js');

// Static routes first
router.get('/categories', cakeController.getCategories);
router.get('/featured', cakeController.getFeatured);
router.get('/specialOffers', cakeController.getSpecialOffers);

// Dynamic route last
router.get('/:id', cakeController.get);

// List all cakes
router.get('/', cakeController.getAll);

module.exports = router;
