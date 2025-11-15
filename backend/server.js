/*
Simple Node/Express backend for your cakes frontend

Project: cake-backend-server (single-file demo)
How to use:
1. Save this file as `server.js` in a new folder.
2. Create a `public/images` folder and copy your pics1.jpg ... pics62.jpg there (or adjust image paths below).
3. Run:
   npm init -y
   npm install express cors body-parser
   node server.js

This demo:
- Serves a generated list of 62 cakes at GET /api/cakes
- Serves single cake at GET /api/cakes/:id
- Serves featured, categories, specialOffers
- Simple in-memory cart and reviews with optional JSON persistence files (cart.json, reviews.json)
- Serves static files from /public (so images placed in public/images accessible at /images/<name>)

Notes:
- For production, connect a real DB (Mongo/Postgres) and add validations/auth.
- If you want me to split into multiple files, add authentication, or connect MongoDB, tell me and I'll generate that code next.
*/

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
// Serve static files (images) from ./public
app.use(express.static(path.join(__dirname, 'public')));

// --- Data generation (62 cakes) ---
const categories = ['Chocolate','Vanilla','Strawberry','Special'];
const cakes = Array.from({length: 62}, (_, i) => {
  const id = i + 1;
  const category = categories[i % categories.length];
  return {
    id,
    name: (function(){
      const base = category === 'Chocolate' ? 'Chocolate' : category === 'Vanilla' ? 'Vanilla' : category === 'Strawberry' ? 'Strawberry' : ['Lemon','Caramel','Coconut','Carrot'][i%4];
      return `${base} ${id}`;
    })(),
    description: `${category} flavour cake - delicious!`,
    price: 20 + (i % 9),
    category,
    image: `/images/pics${id}.jpg` // expects public/images/pics1.jpg ... pics62.jpg
  };
});

// Featured: first 3
const featuredCakes = cakes.slice(0,3).map(({id, name, price, image})=>({id, name, price, image}));

// Categories metadata
const categoriesMeta = categories.map((name, idx)=>({id: idx+1, name, image: `/images/pics${idx+1}.jpg`}));

// Special offers (simple)
const specialOffers = [
  { id: 1, title: 'Buy 2 Get 1 Free', description: 'Mix and match any cakes!', image: '/images/pics5.jpg' },
  { id: 2, title: 'Holiday Special', description: 'Limited time festive cakes!', image: '/images/pics6.jpg' },
  { id: 3, title: 'Weekend Treat', description: 'Extra 10% off on chocolate cakes', image: '/images/pics7.jpg' }
];

// Persisted files (optional)
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);
const REVIEWS_FILE = path.join(DATA_DIR, 'reviews.json');
const CART_FILE = path.join(DATA_DIR, 'cart.json');

function readJSON(filePath, fallback){
  try { const raw = fs.readFileSync(filePath, 'utf8'); return JSON.parse(raw); } catch(e){ return fallback; }
}
function writeJSON(filePath, data){ fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); }

let reviews = readJSON(REVIEWS_FILE, [
  { id: 1, name: 'Alice', rating: 5, comment: 'Test', image: '/images/user-1.png' },
  { id: 2, name: 'Mark', rating: 4, comment: 'Test', image: '/images/user-2.png' }
]);
let cart = readJSON(CART_FILE, []);

// --- API routes ---
app.get('/api/cakes', (req, res) => {
  // basic pagination support
  const page = Math.max(1, parseInt(req.query.page||'1'));
  const limit = Math.max(1, Math.min(100, parseInt(req.query.limit||'20')));
  const start = (page-1)*limit;
  const paged = cakes.slice(start, start+limit);
  res.json({ total: cakes.length, page, limit, data: paged });
});

app.get('/api/cakes/:id', (req, res) => {
  const id = Number(req.params.id);
  const cake = cakes.find(c => c.id === id);
  if (!cake) return res.status(404).json({ error: 'Cake not found' });
  res.json(cake);
});

app.get('/api/featured', (req, res) => res.json(featuredCakes));
app.get('/api/categories', (req, res) => res.json(categoriesMeta));
app.get('/api/specialOffers', (req, res) => res.json(specialOffers));

// Reviews
app.get('/api/reviews', (req, res) => res.json(reviews));
app.post('/api/reviews', (req, res) => {
  const { name, rating, comment, image } = req.body;
  if (!name || !rating) return res.status(400).json({ error: 'name and rating required' });
  const newReview = { id: (reviews.length?reviews[reviews.length-1].id:0)+1, name, rating, comment: comment||'', image: image||'/images/user-3.png' };
  reviews.push(newReview);
  try { writeJSON(REVIEWS_FILE, reviews); } catch(e){ /* ignore */ }
  res.status(201).json(newReview);
});

// Cart: simple add / get / clear
app.get('/api/cart', (req, res) => res.json(cart));
app.post('/api/cart', (req, res) => {
  const { items } = req.body; // expect array of {id, quantity}
  if (!Array.isArray(items)) return res.status(400).json({ error: 'items array required' });
  cart = items;
  try { writeJSON(CART_FILE, cart); } catch(e){}
  res.json({ success: true, cart });
});
app.delete('/api/cart', (req, res) => { cart = []; writeJSON(CART_FILE, cart); res.json({ success: true }); });

// Simple search
app.get('/api/search', (req, res) => {
  const q = (req.query.q||'').toLowerCase();
  if (!q) return res.json([]);
  const found = cakes.filter(c => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)).slice(0,50);
  res.json(found);
});

// Health
app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));

// Fallback for client-side routing (if desired) - uncomment if serving a frontend build
// app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(PORT, () => console.log(`Cake backend running on http://localhost:${PORT}`));

