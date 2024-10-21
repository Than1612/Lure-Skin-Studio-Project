import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./modal.css"; // Make sure to create the necessary CSS for styling

const ProductModal = ({ product, onClose }) => {
  if (!product) return null; // Don't render if there's no product

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="modal-details">
          {/* Left side: Image */}
          <div className="modal-image-container">
            <img
              src={product.proImg}
              alt={product.product_name}
              className="modal-image"
            />
          </div>

          {/* Right side: Product Info */}
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
