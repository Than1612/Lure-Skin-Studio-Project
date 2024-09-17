import React, { useState, useEffect } from "react";
import ArrivalsCard from "./ArrivalsCard";
import img1 from "../attachments/attachments1/i1.png";
import img2 from "../attachments/attachments1/i2.png";
import img3 from "../attachments/attachments1/i3.png";
import img4 from "../attachments/attachments1/i4.png";
import "./Arrivals.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Arrivals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const products = [
    { id: 1, name: "NATURAL GLOW", price: "$200.00", img: img1 },
    { id: 2, name: "NATURAL GLOW", price: "$100.00", img: img2 },
    { id: 3, name: "NATURAL GLOW", price: "$100.00", img: img3 },
    { id: 4, name: "NATURAL GLOW", price: "$100.00", img: img4 },
    { id: 5, name: "NATURAL GLOW", price: "$100.00", img: img3 },
  ];

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div
      className="arrivals-section open-up"
      style={{ width: "100vw" }}
      data-aos="zoom-out"
    >
      <br/><br/>
      <h2 className="section-title text-uppercase mb-0">ARRIVALS</h2>
      <div className="carousel-container">
        <button className="arrow-btn left-arrow" onClick={prevProduct}>
          ←
        </button>

        <div
          className="carousel"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="arrivals-card">
              <ArrivalsCard
                img={product.img}
                name={product.name}
                price={product.price}
              />
            </div>
          ))}
        </div>

        <button className="arrow-btn right-arrow" onClick={nextProduct}>
          →
        </button>
      </div>
    </div>
  );
};

export default Arrivals;
