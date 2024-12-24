import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/Cart.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [customerContact, setCustomerContact] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  // Load cart items from local storage when the component mounts
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const parsedCartItems = storedCartItems.map(item => ({
      ...item,
      MRP: Number(item.MRP), // Ensure MRP is a number
      quantity: Number(item.quantity) // Ensure quantity is a number
    }));
    setCartItems(parsedCartItems);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.quantity * item.MRP), 0);
  };

  const handlePayment = () => {
    const orderDetails = cartItems.map(item => ({
      productName: item.product_name,
      price: item.MRP,
      quantity: item.quantity
    }));

    const jsonData = {
      amount: calculateTotal(),
      customerName,
      customerContact,
      customerEmail,
      orderDetails
    };

    // Send JSON data to API
    fetch("https://your-api-url.com/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonData)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Payment response:", data);
        alert("Order placed successfully!");
      })
      .catch(error => {
        console.error("Payment error:", error);
        alert("Failed to place order.");
      });
  };

  const clearCart = () => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
  };

  return (
    <div className="cart-page">
      <div className="cart-inner">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
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
            <button className="clear-button" onClick={clearCart}>Clear Cart</button>
          </>
        )}
        <div className="checkout-section">
          <h3>Customer Details:</h3>
          <div className="form-row">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label>Contact Number:</label>
            <input
              type="text"
              placeholder="Contact Number"
              value={customerContact}
              onChange={(e) => setCustomerContact(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
            />
          </div>
          <button className="payment-button" onClick={handlePayment}>Go to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
