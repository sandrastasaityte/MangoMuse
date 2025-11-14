import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Cakes.css";
import { cakes } from "../../assets/cakesData";

const categories = ["All", ...new Set(cakes.map(c => c.category))];

const Cakes = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);

  const filteredCakes = selectedCategory === "All"
    ? cakes
    : cakes.filter(cake => cake.category === selectedCategory);

  return (
    <div className="cakes-container">
      <h1>Our Cakes</h1>
      <div className="categories">
        {categories.map(cat => (
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
        {filteredCakes.map(cake => (
          <div key={cake.id} className="cake-card">
            {cake.category === "Special" && <span className="badge">Special</span>}
            <img src={cake.image} alt={cake.name} />
            <h3>{cake.name}</h3>
            <p className="description">{cake.description}</p>
            <p className="price">${cake.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cakes;
