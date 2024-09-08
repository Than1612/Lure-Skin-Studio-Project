import React, { useState, useRef, useEffect } from "react";
import ArrivalsCard from "./ArrivalsCard";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../attachments/attachments1/i1.png";
import img2 from "../attachments/attachments1/i2.png";
import img3 from "../attachments/attachments1/i3.png";
import img4 from "../attachments/attachments1/i4.png";

const BestSelling = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);
  const totalProducts = 5;
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with custom duration
  }, []);

  const products = [
    { id: 1, name: "NATURAL GLOW", price: "$200.00", img: img1 },
    { id: 2, name: "NATURAL GLOW", price: "$100.00", img: img2 },
    { id: 3, name: "NATURAL GLOW", price: "$100.00", img: img3 },
    { id: 4, name: "NATURAL GLOW", price: "$100.00", img: img4 },
    { id: 5, name: "NATURAL GLOW", price: "$100.00", img: img3 },
  ];

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProducts);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalProducts - 1 : (prevIndex - 1) % totalProducts
    );
  };

  const getVisibleProducts = () => {
    const visibleProducts = [];
    for (let i = 0; i < 4; i++) {
      visibleProducts.push(products[(currentIndex + i) % totalProducts]);
    }
    return visibleProducts;
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      startX.current = e.touches[0].clientX;
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 1) {
      const currentX = e.touches[0].clientX;
      const diffX = startX.current - currentX;

      if (diffX > 50) {
        nextProduct();
        startX.current = currentX;
      }

      if (diffX < -50) {
        prevProduct();
        startX.current = currentX;
      }
    }
  };

  return (
    <div
      className="best-selling-section open-up"
      style={{ width: "100vw" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      data-aos="zoom-out"
    >
      <h2 className="best-selling-title">BEST SELLING ITEMS</h2>
      <div className="flex items-center justify-between relative">
        <button
          className="best-selling-arrow-btn best-selling-left-arrow"
          onClick={prevProduct}
        >
          ←
        </button>

        <div
          className="flex gap-2 justify-around overflow-hidden best-selling-carousel"
          style={{ width: "90vw", transition: "transform 0.5s ease-in-out" }}
        >
          {getVisibleProducts().map((product) => (
            <ArrivalsCard
              key={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>

        <button
          className="best-selling-arrow-btn best-selling-right-arrow"
          onClick={nextProduct}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default BestSelling;
