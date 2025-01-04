import React, { useState } from "react";
import "./admin.css"
const Admin = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    arrivalDate: "",
    description: "",
    benefits: "",
    usageStorage: "",
    loadedWith: "",
    disclaimer: "",
    quantity: "",
    category: "body",
    images: null,
  });

  const categories = ["body", "hair", "face"];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch("http://localhost:5001/admin/add-product", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Product added successfully!");
        handleClear(); // Clear the form after submission
      } else {
        alert("Failed to add product!");
      }
    } catch (err) {
      console.error(err);
      alert("Error adding product.");
    }
  };

  const handleClear = () => {
    setFormData({
      productName: "",
      productPrice: "",
      arrivalDate: "",
      description: "",
      benefits: "",
      usageStorage: "",
      loadedWith: "",
      disclaimer: "",
      quantity: "",
      category: "body",
      images: null,
    });
  };

  return (
    <div className="admin-page">
      <h1>Admin Panel - Add Product</h1>
      <form onSubmit={handleSubmit} className="product-form">
        {/* Product Name */}
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
          />
        </div>
        {/* Product Price */}
        <div>
          <label>Product Price:</label>
          <input
            type="number"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleChange}
            required
          />
        </div>
        {/* Arrival Date */}
        <div>
          <label>Arrival Date:</label>
          <input
            type="date"
            name="arrivalDate"
            value={formData.arrivalDate}
            onChange={handleChange}
            required
          />
        </div>
        {/* Description */}
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        {/* Benefits */}
        <div>
          <label>Benefits:</label>
          <textarea
            name="benefits"
            value={formData.benefits}
            onChange={handleChange}
          />
        </div>
        {/* Usage/Storage */}
        <div>
          <label>Usage & Storage:</label>
          <textarea
            name="usageStorage"
            value={formData.usageStorage}
            onChange={handleChange}
          />
        </div>
        {/* Loaded With */}
        <div>
          <label>Loaded With:</label>
          <textarea
            name="loadedWith"
            value={formData.loadedWith}
            onChange={handleChange}
          />
        </div>
        {/* Disclaimer */}
        <div>
          <label>Disclaimer:</label>
          <textarea
            name="disclaimer"
            value={formData.disclaimer}
            onChange={handleChange}
          />
        </div>
        {/* Quantity */}
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        {/* Category */}
        <div>
          <label>Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {/* Images */}
        <div>
          <label>Product Image:</label>
          <input
            type="file"
            name="images"
            onChange={handleChange}
            required
          />
        </div>
        {/* Submit and Clear Buttons */}
        <div className="buttons">
          <button type="submit">Add Product</button>
          <button type="button" onClick={handleClear} className="clear-button">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
