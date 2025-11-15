import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { cakes, featuredCakes, categories, specialOffers } from "../../assets/cakesData";
import { CartContext } from "../../Context/CartContext"; // <-- import

const Home = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // <-- use context

  // Hero slider autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % cakes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Navigate to Cakes.jsx with selected category
  const goToCategory = (categoryName) => {
    navigate("/cakes", { state: { category: categoryName } });
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img
          src={cakes[currentHero].image}
          alt={cakes[currentHero].name}
          className="hero-image"
        />
        <div className="hero-overlay">
          <h1>Delicious Cakes for Every Occasion</h1>
          <p>Explore our collection and find your favorite</p>
          <button className="hero-btn" onClick={() => navigate("/cakes")}>
            Shop Now
          </button>
        </div>
      </div>

      {/* Featured Cakes */}
      <section className="featured-section">
        <h2>Featured Cakes</h2>
        <div className="featured-grid">
          {featuredCakes.map((cake) => (
            <div key={cake.id} className="featured-card">
              <img src={cake.image} alt={cake.name} />
              <div className="cake-info">
                <h3>{cake.name}</h3>
                <p>${cake.price}</p>
                <button
                  className="add-cart-btn"
                  onClick={() => addToCart(cake)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Explore Our Categories</h2>
        <div className="categories-grid">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="category-card"
              onClick={() => goToCategory(cat.name)}
            >
              <img
                src={cakes.find((c) => c.category === cat.name)?.image}
                alt={cat.name}
              />
              <div className="category-overlay">
                <h3>{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="special-section">
        <h2>Special Offers</h2>
        <div className="special-grid">
          {specialOffers.map((offer, idx) => (
            <div key={offer.id} className="special-card">
              <img src={cakes[idx].image} alt={offer.title} />
              <div className="special-overlay">
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <button
                  className="shop-btn"
                  onClick={() => addToCart(cakes[idx])} // <-- now add to cart works
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
