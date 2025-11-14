import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, cartTotal, clearCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postcode: "",
    card: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cartItems.length) return alert("Cart is empty!");
    alert("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-content">
        <div className="checkout-summary">
          <h3>Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item._id} className="checkout-item">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <h3>Total: ${cartTotal.toFixed(2)}</h3>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Billing Details</h3>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
          <input type="text" name="city" placeholder="City" onChange={handleChange} required />
          <input type="text" name="postcode" placeholder="Postcode" onChange={handleChange} required />
          <input type="text" name="card" placeholder="Card Number" onChange={handleChange} required />
          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
