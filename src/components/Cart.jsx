import React, { useEffect, useState } from "react";
import '../components/Cart.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from local storage when the component mounts
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.MRP, 0);
  };

  return (
    <div className="cart-page">
      <div className="cart-inner">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <table className="cart-table">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Cumulative Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.product_name}</td>
                  <td>{item.quantity}</td>
                  <td>Rs {item.MRP}</td>
                  <td>Rs {item.quantity * item.MRP}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">Total</td>
                <td>Rs {calculateTotal()}</td>
              </tr>
            </tfoot>
          </table>
        )}
        <div className="checkout-section">
          <span>Enter your WhatsApp number:</span>
          <input type="text" className="whatsapp-input" />
          <button className="payment-button">Go to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
 