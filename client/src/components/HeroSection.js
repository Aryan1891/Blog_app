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
    }, 3000); // Change image every 3 seconds

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
        <h1>Welcome to Our Platform</h1>
        <p>Explore the world of innovation and creativity</p>
      </div>
    </div>
  );
};

export default HeroSection;
