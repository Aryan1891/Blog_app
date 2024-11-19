import React, { useState, useEffect } from 'react';
import '../App.css'; // Include necessary styles

const images = [
  './car1.jpg',
  './car2.jpg',
  './car3.jpg',
  './car4.jpg',
  './car5.jpg'
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <img
        src={images[currentImage]}
        alt="Slideshow"
        className="hero-image"
      />
      <div className="hero-overlay">
        <h1>Welcome to Rotary</h1>
        <h3>Your ultimate destination for car enthusiasts. Explore the world of wheels, speed, and innovation with our expert-driven blogs!</h3>
      </div>
    </div>
  );
};

export default HeroSection;
