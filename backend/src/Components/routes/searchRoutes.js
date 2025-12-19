const express = require('express');
const router = express.Router();
const searchController = require('../Controllers/searchController');

router.get('/', searchController.searchCakes);

module.exports = router;
