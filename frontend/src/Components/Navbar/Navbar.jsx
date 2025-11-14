import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import "./Navbar.css";
import cart_icon from "../../assets/cart_icon.png";

const Navbar = () => {
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
        <Link to="/cart" className="nav-link">
          <img src={cart_icon} alt="Cart" className="cart-icon" />
        </Link>
      </div>

      {/* Auth Buttons */}
      <div className="auth-links">
        <SignedOut>
          {/* Combined Login / Sign Up button */}
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
