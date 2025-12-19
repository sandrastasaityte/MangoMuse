// src/Components/Controllers/cakeController.js

// Categories
const categories = ['Chocolate','Vanilla','Strawberry','Special'];

// Generate 62 cakes
const cakes = Array.from({ length: 62 }, (_, i) => {
  const id = i + 1;
  const category = categories[i % categories.length];
  return {
    id,
    name: `${category} ${id}`,
    description: `${category} flavour cake - delicious!`,
    price: 20 + (i % 9),
    category,
    image: `/images/pics${id}.jpg`
  };
});

// Featured cakes (first 3 cakes)
const featuredCakes = cakes.slice(0, 3).map(({ id, name, price, image }) => ({ id, name, price, image }));

// Categories metadata with images
const categoriesMeta = categories.map((name, idx) => ({
  id: idx + 1,
  name,
  image: `/images/pics${idx + 1}.jpg`
}));

// Special offers
const specialOffers = [
  { id: 1, title: 'Buy 2 Get 1 Free', description: 'Mix and match any cakes!', image: '/images/pics5.jpg' },
  { id: 2, title: 'Holiday Special', description: 'Limited time festive cakes!', image: '/images/pics6.jpg' },
  { id: 3, title: 'Weekend Treat', description: 'Extra 10% off on chocolate cakes', image: '/images/pics7.jpg' }
];

// Controllers
exports.getAll = (req, res) => {
  const page = Math.max(1, parseInt(req.query.page || '1'));
  const limit = Math.max(1, Math.min(100, parseInt(req.query.limit || '20')));
  const start = (page - 1) * limit;
  res.json({ total: cakes.length, page, limit, data: cakes.slice(start, start + limit) });
};

exports.get = (req, res) => {
  const id = Number(req.params.id);
  const cake = cakes.find(c => c.id === id);
  if (!cake) return res.status(404).json({ error: 'Cake not found' });
  res.json(cake);
};

exports.getFeatured = (req, res) => {
  res.json(featuredCakes);
};

exports.getCategories = (req, res) => {
  console.log("Sending categories:", categoriesMeta);
  res.json(categoriesMeta);
};


exports.getSpecialOffers = (req, res) => {
  res.json(specialOffers);
};
