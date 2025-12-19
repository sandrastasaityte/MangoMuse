const mongoose = require('mongoose');

const specialOfferSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String
});

module.exports = mongoose.model('SpecialOffer', specialOfferSchema);
