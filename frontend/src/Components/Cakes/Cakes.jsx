import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Cakes.css";
import { cakes } from "../../assets/cakesData";
import { CartContext } from "../../Context/CartContext";

const categories = ["All", ...new Set(cakes.map((cake) => cake.category))];

const Cakes = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useContext(CartContext);

  // If navigated from Home with category, set it
  useEffect(() => {
    if (location.state && location.state.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);

  const filteredCakes =
    selectedCategory === "All"
      ? cakes
      : cakes.filter((cake) => cake.category === selectedCategory);

  return (
    <div className="cakes-container">
      <h1>Our Cakes</h1>

      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="cakes-grid">
        {filteredCakes.map((cake) => (
          <div key={cake.id} className="cake-card">
            {cake.category === "Special" && <span className="badge">Special</span>}
            <img src={cake.image} alt={cake.name} />
            <h3>{cake.name}</h3>
            <p className="description">{cake.description}</p>
            <p className="price">${cake.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(cake)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cakes;
