import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";

const Admin = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false); 
  const [loading, setLoading] = useState(true); 
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
  const [error, setError] = useState(""); 

  const categories = ["body", "face", "hair", "skincare", "fragrance"]; 
  useEffect(() => {
    const verifyAdmin = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Unauthorized access. Please login.");
        navigate("/login");
        return;
      }

      try {
        const response = await fetch("http://localhost:5001/admin", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (response.ok) {
          setIsAdmin(true);
        } else {
          const errorData = await response.json();
          alert(errorData.message || "You are not authorized to access this page.");
          navigate("/login");
        }
      } catch (err) {
        console.error("Error verifying admin token:", err);
        alert("An error occurred. Please try again.");
        navigate("/login");
      } finally {
        setLoading(false); 
      }
    };

    verifyAdmin();
  }, [navigate]);
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      setError("Unauthorized. Please login.");
      return;
    }

    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch("http://localhost:5001/upload", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Product uploaded successfully!");
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
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to upload product.");
      }
    } catch (err) {
      console.error("Error uploading product:", err);
      setError("An error occurred while uploading the product.");
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

  if (loading) {
    return <div className="spinner">Loading...</div>; 
  }

  if (!isAdmin) {
    return null; 
  }

  return (
    <div className="admin-page">
      <h1>Admin Panel - Add Product</h1>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="product-form">
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
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Benefits:</label>
          <textarea
            name="benefits"
            value={formData.benefits}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Usage & Storage:</label>
          <textarea
            name="usageStorage"
            value={formData.usageStorage}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Loaded With:</label>
          <textarea
            name="loadedWith"
            value={formData.loadedWith}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Disclaimer:</label>
          <textarea
            name="disclaimer"
            value={formData.disclaimer}
            onChange={handleChange}
          />
        </div>
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
        <div>
          <label>Product Image:</label>
          <input
            type="file"
            name="images"
            onChange={handleChange}
            required
          />
        </div>
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
