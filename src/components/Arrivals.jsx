import React, { useState, useEffect } from "react";
import ArrivalsCard from "./ArrivalsCard";
 
import ProductModal from "./Modal"; // Import ProductModal
 
import { soaps, oils, toners, scrubs } from '../soapData';
import "./Arrivals.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Arrivals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product modal

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const getAllProducts = () => {
    const allProducts = [...soaps, ...oils, ...toners, ...scrubs]; 
    return allProducts.sort((a, b) => new Date(b.arrivalDate) - new Date(a.arrivalDate)); 
  };

  const products = getAllProducts().map((product) => ({
    id: product.product_name,
    name: product.product_name,
    price: `$${product.MRP}.00`,
    img: product.proImgs[0],
 
    ...product, // Include all product details for the modal
 
  }));

  const visibleItemsCount = 3;

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const openModal = (product) => {
    setSelectedProduct(product); // Set product data for modal
  };

  const closeModal = () => {
    setSelectedProduct(null); // Close modal
  };

  return (
    <div className="arrivals-section open-up" style={{ width: "100vw" }} data-aos="zoom-out">
      <br /><br />
      <h2 className="section-title text-uppercase mb-0">Latest Arrivals</h2>
      <div className="carousel-container">
        <button className="arrow-btn left-arrow" onClick={prevProduct}>
          ←
        </button>

        <div
          className="carousel"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItemsCount)}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className="arrivals-card"
              onClick={() => openModal(product)} // Open modal on click
            >
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

      {/* Render ProductModal conditionally */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={closeModal} // Pass closeModal to handle modal close
        />
      )}
    </div>
  );
};

export default Arrivals;
