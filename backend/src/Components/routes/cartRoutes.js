const express = require('express');
const router = express.Router();
const cartController = require('../Controllers/cartController.js');


router.get('/', cartController.getCart);
router.post('/', cartController.addToCart);
router.delete('/', cartController.clearCart);

module.exports = router;
