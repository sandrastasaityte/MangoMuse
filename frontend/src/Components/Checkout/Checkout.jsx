import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postcode: "",
    paymentMethod: "card",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cartItems.length) return alert("Cart is empty!");
    alert(`Order placed successfully!\nPayment Method: ${formData.paymentMethod}`);
    clearCart();
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-content">
        {/* Order Summary */}
        <div className="checkout-summary">
          <h3>Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <h3>Total: ${cartTotal.toFixed(2)}</h3>
        </div>

        {/* Billing & Payment Form */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h3>Billing Details</h3>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
          <input type="text" name="city" placeholder="City" onChange={handleChange} required />
          <input type="text" name="postcode" placeholder="Postcode" onChange={handleChange} required />

          <h3>Payment Method</h3>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === "card"}
                onChange={handleChange}
              />
              Credit/Debit Card
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={formData.paymentMethod === "paypal"}
                onChange={handleChange}
              />
              PayPal
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="applepay"
                checked={formData.paymentMethod === "applepay"}
                onChange={handleChange}
              />
              Apple Pay / Google Pay
            </label>
          </div>

          {/* Card Inputs */}
          {formData.paymentMethod === "card" && (
            <div className="card-details">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                onChange={handleChange}
                required
                maxLength={16}
              />
              <div className="card-row">
                <input
                  type="text"
                  name="cardExpiry"
                  placeholder="MM/YY"
                  onChange={handleChange}
                  required
                  maxLength={5}
                />
                <input
                  type="text"
                  name="cardCVV"
                  placeholder="CVV"
                  onChange={handleChange}
                  required
                  maxLength={3}
                />
              </div>
            </div>
          )}

          <button type="submit" className="checkout-btn">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
