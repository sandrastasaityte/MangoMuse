import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / Brand */}
        <div className="footer-brand">
          <h2>MangoMuse</h2>
          <p>Delicious cakes made with love</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cakes">Cakes</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@mangomuse.com</p>
          <p>Phone: +44 123 456 789</p>
          <p>Address: London, UK</p>
        </div>

        {/* Subscribe */}
        <div className="footer-subscribe">
          <h4>Subscribe</h4>
          <p>Get our latest cakes and offers</p>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* We Are Hiring */}
        <div className="footer-hiring">
          <h4>We Are Hiring!</h4>
          <p>Join our team and bake your career with us.</p>
          <a href="/careers" style={{ color: "#f39c12", textDecoration: "underline" }}>
            See Open Positions
          </a>
        </div>
      </div>

    

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MangoMuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
