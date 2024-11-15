import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./modal.css";

const ProductModal = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);

  if (!product) return null;

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCartClick = () => {
    setShowQuantitySelector(true);
  };

  const confirmAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    // Check if the item already exists in the cart
    const existingItemIndex = cartItems.findIndex(item => item.product_name === product.product_name);
    
    if (existingItemIndex !== -1) {
      // Update quantity if item exists
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      // Add new item if it doesn't exist
      cartItems.push({ 
        product_name: product.product_name, 
        MRP: product.MRP, 
        quantity 
      });
    }
  
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setQuantity(1);
    setShowQuantitySelector(false);
    handleClose();
  };
  

  const cancelAddToCart = () => {
    setQuantity(1); 
    setShowQuantitySelector(false);
  };

  const handleClose = () => {
    setQuantity(1); 
    setShowQuantitySelector(false);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>X</button>
        <div className="modal-details">
          <div className="modal-image-container">
            <div className="slide-image">
              <img
                src={product.proImgs?.[currentImageIndex] || ""}
                alt={product.product_name || "Product Image"}
                className="modal-image"
              />
            </div>
          </div>

          <div className="modal-info">
            <h2>{product.product_name || "Product Name"}</h2>
            <p><strong>Price:</strong> Rs {product.MRP || "N/A"}</p>

            <ul>
              <strong>Description:</strong>
              {(product.description || []).map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul> 

            <ul>
              <strong>Benefits:</strong>
              {(product.benefits || []).map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
            <ul>
              <strong>Usage & Storage:</strong>
              {(product.usage_storage || []).map((usage, idx) => (
                <li key={idx}>{usage}</li>
              ))}
            </ul>
            <ul>
              <strong>Loaded With:</strong>
              {(product.loaded_with || []).map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
            <ul>
              <strong>Disclaimer:</strong>
              {(product.disclaimer || []).map((disclaimer, idx) => (
                <li key={idx}>{disclaimer}</li>
              ))}
            </ul>

            {!showQuantitySelector ? (
              <button className="cart-btn" onClick={handleAddToCartClick}>
                Add to Cart <FaShoppingCart />
              </button>
            ) : (
              <div className="quantity-selector">
                <div className="quantity-controls">
                  <button onClick={handleDecrement}>-</button>
                  <span>{quantity}</span>
                  <button onClick={handleIncrement}>+</button>
                </div>
                <div className="quantity-actions">
                  <button onClick={confirmAddToCart} className="confirm-cart-btn">
                    Confirm
                  </button>
                  <button onClick={cancelAddToCart} className="cancel-cart-btn">
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
