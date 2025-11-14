import React, { useRef, useState, useEffect } from "react";
import "./Reviews.css";
import { reviews } from "../../assets/reviewsData";

const Reviews = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Update active index based on scroll position
  useEffect(() => {
    const carousel = carouselRef.current;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = carousel.firstChild.offsetWidth + 32; // card width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="reviews-container">
      <h1>What Our Customers Say</h1>

      <div className="carousel-wrapper">
        <button className="carousel-btn left" onClick={scrollLeft}>
          &#10094;
        </button>

        <div className="reviews-carousel" ref={carouselRef}>
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <img src={review.image} alt={review.name} className="review-avatar" />
              <h3 className="review-name">{review.name}</h3>

              <div className="review-rating">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`star ${i < review.rating ? "filled" : ""}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="review-comment">"{review.comment}"</p>
            </div>
          ))}
        </div>

        <button className="carousel-btn right" onClick={scrollRight}>
          &#10095;
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="carousel-dots">
        {reviews.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === activeIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
