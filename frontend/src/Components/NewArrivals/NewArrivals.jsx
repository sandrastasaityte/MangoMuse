import React, { useContext } from "react";
import "./NewArrivals.css";
import { cakes } from "../../assets/cakesData";
import { CartContext } from "../../Context/CartContext";

const NewArrivals = ({ count = 8 }) => {
  const newCakes = cakes.slice(-count);
  const { addToCart } = useContext(CartContext);

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
              onClick={() => addToCart(cake)}
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
