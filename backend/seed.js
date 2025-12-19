import mongoose from 'mongoose';
import Cake from './src/Components/models/Cake.js';
import Category from './src/Components/models/Category.js';
import SpecialOffer from './src/Components/models/SpecialOffer.js';
import { cakes, categories, specialOffers } from './src/data/cakesData.js'; // <-- move cakesData here

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected to Atlas!'))
.catch(err => console.error('MongoDB connection error:', err));

const seedDB = async () => {
  try {
    await Cake.deleteMany({});
    await Category.deleteMany({});
    await SpecialOffer.deleteMany({});

    await Cake.insertMany(cakes);
    await Category.insertMany(categories);
    await SpecialOffer.insertMany(specialOffers);

    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Seeding error:', err);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();

