import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./modal.css"; // Ensure your styles are imported here

const ProductModal = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.proImgs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.proImgs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="modal-details">
          {/* Carousel Image Section */}
          <div className="modal-image-container">
            <button className="prev-button" onClick={handlePrevImage}>
              &#10094;
            </button>

            <div className="slide-image">
              <img
                src={product.proImgs[currentImageIndex]}
                alt={product.product_name}
                className="modal-image"
              />
            </div>

            <button className="next-button" onClick={handleNextImage}>
              &#10095;
            </button>
          </div>

          {/* Product Info */}
          <div className="modal-info">
            <h2>{product.product_name}</h2>
            <p>
              <strong>Price:</strong> Rs {product.MRP}
            </p>
            <p>
              <strong>Description:</strong> {product.description}
            </p>
            <ul>
              <strong>Benefits:</strong>
              {product.benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
            <button className="cart-btn">
              Add to Cart <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
