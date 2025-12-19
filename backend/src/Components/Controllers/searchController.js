const categories = ['Chocolate','Vanilla','Strawberry','Special'];

// Generate same 62 cakes as in cakeController
const cakes = Array.from({length: 62}, (_, i) => {
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

exports.searchCakes = (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  if (!q) return res.json([]);
  const found = cakes.filter(c =>
    c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
  ).slice(0,50);
  res.json(found);
};
