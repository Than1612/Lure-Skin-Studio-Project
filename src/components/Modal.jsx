import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./modal.css";

const ProductModal = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showQuantityActions, setShowQuantityActions] = useState(false);

  useEffect(() => {
    // Initialize cart items from local storage if it exists
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    // Set this to any local state if needed
  }, []);

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

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCartClick = () => {
    setShowQuantityActions(true);
  };

  const confirmAddToCart = () => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = [...storedCartItems, { ...product, quantity }];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    console.log(`Added ${quantity} of ${product.product_name} to cart.`);

    setShowQuantityActions(false);
    onClose();
  };

  const cancelAddToCart = () => {
    setShowQuantityActions(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="modal-details">
          <div className="modal-image-container">
            <div className="slide-image">
              <img
                src={product.proImgs[currentImageIndex]}
                alt={product.product_name}
                className="modal-image"
              />
            </div>
          </div>

          <div className="modal-info">
            <h2>{product.product_name}</h2>
            <p><strong>Price:</strong> Rs {product.MRP}</p>
            <ul>
              <strong>Benefits:</strong>
              {product.benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
            <ul>
              <strong>Usage & Storage:</strong>
              {product.usage_storage.map((usage, idx) => (
                <li key={idx}>{usage}</li>
              ))}
            </ul>
            <ul>
              <strong>Loaded With:</strong>
              {product.loaded_with.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
            <ul>
              <strong>Disclaimer:</strong>
              {product.disclaimer.map((disclaimer, idx) => (
                <li key={idx}>{disclaimer}</li>
              ))}
            </ul>

            {/* Quantity Selector */}
            <div className="quantity-selector">
              <strong>Quantity:</strong>
              <div className="quantity-controls">
                <button onClick={handleDecrement}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrement}>+</button>
              </div>
            </div>

            {/* Show Add to Cart button and Confirm/Cancel buttons conditionally */}
            {!showQuantityActions ? (
              <button className="cart-btn" onClick={handleAddToCartClick}>
                Add to Cart <FaShoppingCart />
              </button>
            ) : (
              <div className="quantity-actions">
                <button onClick={confirmAddToCart} className="confirm-cart-btn">
                  Confirm
                </button>
                <button onClick={cancelAddToCart} className="cancel-cart-btn">
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;