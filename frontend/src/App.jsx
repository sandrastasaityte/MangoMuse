// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Auth from "./Pages/Auth/Auth";
import Home from "./Components/Home/Home";
import Cakes from "./Components/Cakes/Cakes";
import About from "./Components/About/About";
import NewArrivals from "./Components/NewArrivals/NewArrivals";
import Reviews from "./Components/Reviews/Reviews";
import Contact from "./Components/Contact/Contact";
import CartWithAuth from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/cart" element={<CartWithAuth />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
