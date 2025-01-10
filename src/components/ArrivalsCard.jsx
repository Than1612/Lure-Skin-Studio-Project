import React, { useState, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";

const ArrivalsCard = ({ img, name, price }) => {
  const [showQuantitySelector, setShowQuantitySelector] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const cartIconRef = useRef(null);

  const handleAddToCartClick = (event) => {
    event.stopPropagation();
    if (showQuantitySelector !== name) {
      setShowQuantitySelector(name);
      setQuantity(1);
      scrollToCart();
    } else {
      setShowQuantitySelector(null);
    }
  };

  const scrollToCart = () => {
    if (cartIconRef.current) {
      cartIconRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const handleDecrement = (event) => {
    event.stopPropagation();
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleIncrement = (event) => {
    event.stopPropagation();
    setQuantity((prev) => prev + 1);
  };

  const confirmAddToCart = (event) => {
    event.stopPropagation();

    // Parse price to ensure it's a number
    const numericPrice = parseFloat(price.replace("Rs ", ""));

    // Retrieve existing cart items from local storage or initialize empty array
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the product is already in the cart
    const existingItemIndex = cartItems.findIndex((item) => item.product_name === name);

    if (existingItemIndex !== -1) {
      // Update quantity of the existing item
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      // Add new item to the cart
      cartItems.push({ product_name: name, MRP: numericPrice, quantity, img });
    }

    // Save updated cart items back to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    console.log(`Added ${quantity} of ${name} to the cart`);
    setShowQuantitySelector(null);
    setQuantity(1);
  };

  const cancelAddToCart = (event) => {
    event.stopPropagation();
    setShowQuantitySelector(null);
    setQuantity(1);
  };

  return (
    <div className="card" style={styles.card} onClick={() => setShowQuantitySelector(null)}>
      <img src={img} alt={name} className="product-image" style={styles.image} />
      <h3 className="product-name" style={styles.name}>{name}</h3>
      <p className="product-price" style={styles.price}>{price}</p>

      {/* Cart Icon with Expansion Control */}
      <div
        ref={cartIconRef}
        className="cart-icon"
        style={styles.cartIconContainer}
        onClick={handleAddToCartClick}
      >
        <FaShoppingCart />
      </div>

      {/* Quantity Selector at the Bottom */}
      {showQuantitySelector === name && (
        <div className="quantity-selector" style={styles.quantitySelector} onClick={(e) => e.stopPropagation()}>
          <div className="quantity-controls" style={styles.quantityControls}>
            <button onClick={handleDecrement} style={styles.button}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement} style={styles.button}>+</button>
          </div>
          <div className="quantity-actions" style={styles.quantityActions}>
            <button onClick={confirmAddToCart} className="confirm-cart-btn" style={styles.confirmButton}>
              Confirm
            </button>
            <button onClick={cancelAddToCart} className="cancel-cart-btn" style={styles.cancelButton}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    textAlign: "center",
    width: "90%",
    maxWidth: "360px",
    minHeight: "450px",
    backgroundColor: "#f9dcdc",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    padding: "12px",
    position: "relative",
    transition: "transform 0.2s",
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  name: {
    fontSize: "1.2em", 
    margin: "8px 0", 
  },
  price: {
    fontSize: "1em", 
  },
  cartIconContainer: {
    marginTop: "8px",
    cursor: "pointer",
  },
  quantitySelector: {
    marginTop: "16px",
    padding: "12px",
    backgroundColor: "#f9dcdc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  quantityControls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "8px",
  },
  button: {
    padding: "4px 8px",
    fontSize: "16px",
  },
  quantityActions: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "8px",
  },
  confirmButton: {
    backgroundColor: "#e37c8e",
    color: "#fff",
    padding: "4px 8px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "#e37c8e",
    color: "#fff",
    padding: "4px 8px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
};

export default ArrivalsCard;
