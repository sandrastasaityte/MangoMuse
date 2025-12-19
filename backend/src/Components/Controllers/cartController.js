const path = require('path');
const fs = require('fs');

const CART_FILE = path.join(__dirname, '../../data/cart.json');

function readJSON(filePath, fallback) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return fallback;
  }
}

function writeJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

let cart = readJSON(CART_FILE, []);

exports.getCart = (req, res) => {
  res.json(cart);
};

exports.addToCart = (req, res) => {
  const { items } = req.body;
  if (!Array.isArray(items)) return res.status(400).json({ error: 'items array required' });
  cart = items;
  writeJSON(CART_FILE, cart);
  res.json({ success: true, cart });
};

exports.clearCart = (req, res) => {
  cart = [];
  writeJSON(CART_FILE, cart);
  res.json({ success: true });
};
