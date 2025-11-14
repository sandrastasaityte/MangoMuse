import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { SignedIn } from "@clerk/clerk-react";
import Auth from "./Pages/Auth/Auth";
import Home from "./Components/Home/Home";
import Cakes from "./Components/Cakes/Cakes"
import About from "./Components/About/About"
import NewArrivals from "./Components/NewArrivals/NewArrivals";
import Reviews from "./Components/Reviews/Reviews";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/cakes" element={<Cakes/>} />
        <Route path="/new-arrivals" element={<NewArrivals/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/contacts" element={<Contact/>} />
        <Route
          path="/cart"
          element={
            <SignedIn>
              <>Cart Page</>
            </SignedIn>
          }
        />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
