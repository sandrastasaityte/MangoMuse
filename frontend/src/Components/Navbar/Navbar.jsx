import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import "./Navbar.css";
import cart_icon from "../../assets/cart_icon.png";
import { CartContext } from "../../Context/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  // Calculate total quantity
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">MangoMuse</Link>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/cakes" className="nav-link">Cakes</Link>
        <Link to="/new-arrivals" className="nav-link">New Arrivals</Link>
        <Link to="/reviews" className="nav-link">Reviews</Link>
        <Link to="/contacts" className="nav-link">Contacts</Link>

        {/* Cart Icon */}
        <Link to="/cart" className="nav-link cart-link">
          <img src={cart_icon} alt="Cart" className="cart-icon" />
          {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
        </Link>
      </div>

      {/* Auth Buttons */}
      <div className="auth-links">
        <SignedOut>
          <Link to="/auth" className="nav-link">Login / Sign Up</Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
