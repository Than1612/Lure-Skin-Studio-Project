import React, { useState, useEffect } from "react";
import ArrivalsCard from "./ArrivalsCard";
import ProductModal from "./Modal";
import { soaps, oils, toners, scrubs } from '../soapData';
import "./BestSelling.css";
import AOS from "aos";
import "aos/dist/aos.css";

const BestSelling = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const getBestSellingProducts = () => {
    const allProducts = [...soaps, ...oils, ...toners, ...scrubs];
    return allProducts
      .filter(product => product.MRP > 0)
      .sort((a, b) => b.MRP - a.MRP)
      .slice(0, 5)
      .map((product) => ({
        id: product.product_name,
        name: product.product_name,
        price: `Rs ${product.MRP}`,
        img: product.proImgs[0],
        ...product // Pass all properties for modal use
      }));
  };

  const products = getBestSellingProducts();
  const visibleItemsCount = 3;

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = (event) => {
    if (event) event.stopPropagation(); // Prevent event bubbling
    setSelectedProduct(null);
  };

  return (
    <div className="arrivals-section open-up" style={{ width: "100vw" }} data-aos="zoom-out">
      <h2 className="section-title text-uppercase mb-0">BEST SELLING</h2>
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
              onClick={() => openModal(product)}
            >
              <ArrivalsCard img={product.img} name={product.name} price={product.price} />
            </div>
          ))}
        </div>

        <button className="arrow-btn right-arrow" onClick={nextProduct}>
          →
        </button>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={(e) => closeModal(e)}
        />
      )}
    </div>
  );
};

export default BestSelling;
