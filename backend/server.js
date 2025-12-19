require('dotenv').config(); // load .env variables
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

const mongoose = require('mongoose');

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected to Atlas!'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/images', express.static('public/images'));

// Routes
app.use('/api/cakes', require('./src/Components/routes/cakeRoutes'));
const reviewRoutes = require('./src/Components/routes/reviewRoutes.js'); 
app.use('/api/reviews', reviewRoutes);
app.use('/api/cart', require('./src/Components/routes/cartRoutes'));
app.use('/api/search', require('./src/Components/routes/searchRoutes'));

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));

// Error handler
const { errorHandler } = require('./src/middleware/errorHandler');
app.use(errorHandler);

app.listen(PORT, () => console.log(`Cake backend running on http://localhost:${PORT}`));
