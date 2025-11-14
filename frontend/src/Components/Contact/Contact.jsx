import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        Have a question or want to place a custom cake order? Fill out the form
        below and we'll get back to you!
      </p>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
            ></textarea>
          </label>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        {/* Contact Info + Map */}
        <div className="contact-info">
          <h3>Our Contact Info</h3>
          <p>
            <i className="fas fa-envelope"></i>{" "}
            <a href="mailto:info@mangomuse.com">info@mangomuse.com</a>
          </p>
          <p>
            <i className="fas fa-phone"></i>{" "}
            <a href="tel:+1234567890">+1 234 567 890</a>
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> 123 Mango Street, Cake
            City, UK
          </p>

          {/* Google Map */}
          <div className="map-container">
            <iframe
              title="MangoMuse Location"
              src="https://www.google.com/maps?q=123+Mango+Street,+Cake+City,+UK&hl=en&z=15&output=embed"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "15px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
