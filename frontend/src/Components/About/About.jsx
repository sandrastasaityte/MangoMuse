// src/Components/About/About.jsx
import React from "react";
import "./About.css";
import { cakes } from "../../assets/cakesData";

const About = () => {
  // Pick a featured cake for the About image
  // For example, we take cake with id 33, or you could pick randomly
  const featuredCake = cakes.find(cake => cake.id === 33) || cakes[0];

  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1>About MangoMuse</h1>
          <p>
            Welcome to <strong>MangoMuse</strong>, your ultimate destination for 
            delightful and handcrafted cakes. We believe that every cake tells a story, 
            and our mission is to make your special moments unforgettable with our creations.
          </p>
          <p>
            From rich chocolate indulgences to classic vanilla favorites, our team of skilled 
            bakers combines quality ingredients with passion and creativity. Every cake is 
            baked with love and attention to detail, ensuring not just a treat for your taste buds, 
            but also a feast for your eyes.
          </p>
          <p>
            Join us on this delicious journey and let <strong>MangoMuse</strong> be a part 
            of your celebrations!
          </p>
          <button className="learn-more">Learn More</button>
        </div>

        <div className="about-image">
          {/* Use image from cakesData */}
          <img src={featuredCake.image} alt={featuredCake.name} />
        </div>
      </div>
    </div>
  );
};

export default About;
