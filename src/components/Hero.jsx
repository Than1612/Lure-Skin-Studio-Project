import React, { useState } from 'react';
import './Hero.css'; // Import the CSS file for animations
import img1 from "../images/cat-large-item1.jpg";
import img2 from "../images/cat-large-item2.jpg";
import img3 from "../images/cat-large-item3.jpg";
const slides = [
  {
    image: img1, // Replace with your image URLs
    title: 'Slide Title 1',
    description: 'This is the description for slide 1.',
  },
  {
    image: img2,
    title: 'Slide Title 2',
    description: 'This is the description for slide 2.',
  },
  {
    image: img3,
    title: 'Slide Title 3',
    description: 'This is the description for slide 3.',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      <div
        className="absolute inset-0 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full h-64 bg-cover bg-center"
            style={{ backgroundImage: slide.image }}
          >
            <div className="flex items-center justify-center h-full overlay">
              <div className={`text-white text-center transition-transform duration-500 ${currentSlide === index ? 'slide-up' : 'slide-down'}`}>
                <h2 className="text-2xl font-bold">{slide.title}</h2>
                <p className="mt-2">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-0 z-10 p-2 bg-gray-800 text-white rounded-full">
        Prev
      </button>
      <button onClick={nextSlide} className="absolute right-0 z-10 p-2 bg-gray-800 text-white rounded-full">
        Next
      </button>
    </div>
  );
};

export default Hero;
