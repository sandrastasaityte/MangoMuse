const mongoose = require('mongoose');

const cakeSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String
});

module.exports = mongoose.model('Cake', cakeSchema);
