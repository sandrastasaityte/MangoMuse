import React from "react";
import "./NewArrivals.css";
import { cakes } from "../../assets/cakesData";

const NewArrivals = ({ count = 8 }) => {
  const newCakes = cakes.slice(-count);

  return (
    <div className="newarrivals-container">
      <h1>New Arrivals</h1>
      <div className="newarrivals-grid">
        {newCakes.map((cake) => (
          <div key={cake.id} className="cake-card">
            {cake.category === "Special" && <span className="badge">Special</span>}
            <img src={cake.image} alt={cake.name} />
            <h3>{cake.name}</h3>
            <p className="description">{cake.description}</p>
            <p className="price">${cake.price}</p>
            <button
              className="add-to-cart"
              onClick={() => alert(`${cake.name} added to cart!`)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
