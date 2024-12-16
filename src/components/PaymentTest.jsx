import axios from 'axios';
import React, { useState } from 'react';

function PaymentTest() {
  const [responseId, setResponseId] = useState("");
  const [responseState, setResponseState] = useState([]);
  const [formData, setFormData] = useState({
    amount: '',
    customerName: '',
    customerContact: '',
    customerEmail: '',
    orderDetails: [{ productName: '', price: '', quantity: '' }]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOrderDetailsChange = (index, field, value) => {
    const newOrderDetails = [...formData.orderDetails];
    newOrderDetails[index][field] = value;
    setFormData(prev => ({ ...prev, orderDetails: newOrderDetails }));
  };

  const addOrderDetail = () => {
    setFormData(prev => ({
      ...prev,
      orderDetails: [...prev.orderDetails, { productName: '', price: '', quantity: '' }]
    }));
  };

  const createAndSendPaymentLink = () => {
    axios.post("http://localhost:5000/create-and-send-payment-link", formData)
      .then(response => {
        setResponseId(response.data.paymentLink.id);
        alert("Payment link created and sent via WhatsApp!");
      })
      .catch(error => {
        console.error("Error creating or sending payment link:", error);
      });
  };

  return (
    <div className="App">
      <h1>Create and Send Payment Link</h1>
      <input
        type="text"
        name="amount"
        value={formData.amount}
        onChange={handleInputChange}
        placeholder="Amount in INR"
      />
      <input
        type="text"
        name="customerName"
        value={formData.customerName}
        onChange={handleInputChange}
        placeholder="Customer Name"
      />
      <input
        type="text"
        name="customerContact"
        value={formData.customerContact}
        onChange={handleInputChange}
        placeholder="Customer Contact"
      />
      <input
        type="email"
        name="customerEmail"
        value={formData.customerEmail}
        onChange={handleInputChange}
        placeholder="Customer Email"
      />
      <div>
        <h2>Order Details</h2>
        {formData.orderDetails.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Product Name"
              value={item.productName}
              onChange={(e) => handleOrderDetailsChange(index, 'productName', e.target.value)}
            />
            <input
              type="text"
              placeholder="Price"
              value={item.price}
              onChange={(e) => handleOrderDetailsChange(index, 'price', e.target.value)}
            />
            <input
              type="text"
              placeholder="Quantity"
              value={item.quantity}
              onChange={(e) => handleOrderDetailsChange(index, 'quantity', e.target.value)}
            />
          </div>
        ))}
        <button onClick={addOrderDetail}>Add More Items</button>
      </div>
      <button onClick={createAndSendPaymentLink}>Create and Send Payment Link</button>
    </div>
  );
}

export default PaymentTest;
