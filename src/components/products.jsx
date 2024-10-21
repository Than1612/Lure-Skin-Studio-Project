import React, { useState } from "react";
import "./products.css"; 
import { soaps, oils } from "../soapData"; // Assuming you import your data correctly
import { FaShoppingCart } from "react-icons/fa"; 
import ProductModal from "./Modal"; // Import the modal

const Products = () => {
  const [showAllSoaps, setShowAllSoaps] = useState(false);
  const [showAllOils, setShowAllOils] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product

  const initialDisplayLimit = 4;

  const toggleSoaps = () => {
    setShowAllSoaps(!showAllSoaps);
  };

  const toggleOils = () => {
    setShowAllOils(!showAllOils);
  };

  const openModal = (product) => {
    setSelectedProduct(product); // Set the product to display in modal
  };

  const closeModal = () => {
    setSelectedProduct(null); // Close the modal
  };

  return (
    <div className="product-container">
      <h1 className="tagline">Tag Line For Lure</h1>

      {/* Soaps Section */}
      <section className="soap-section">
        <h2>Soaps</h2>
        <div className="product-grid">
          {(showAllSoaps ? soaps : soaps.slice(0, initialDisplayLimit)).map((product, index) => (
            <div key={index} className="product-card" onClick={() => openModal(product)}>
              <img src={product.proImg} alt={product.product_name} className="product-image" />
              <div className="product-details">
                <h6>{product.product_name}</h6>
                <p>Price: Rs {product.MRP}</p>
              </div>
            </div>
          ))}
        </div>

        {soaps.length > initialDisplayLimit && (
          <button onClick={toggleSoaps} className="see-more-btn">
            {showAllSoaps ? "See Less" : "See More"}
          </button>
        )}
      </section>

      {/* Oils Section */}
      <section className="oil-section">
        <h2>Oils</h2>
        <div className="product-grid">
          {(showAllOils ? oils : oils.slice(0, initialDisplayLimit)).map((product, index) => (
            <div key={index} className="product-card" onClick={() => openModal(product)}>
              <img src={product.proImg} alt={product.product_name} className="product-image" />
              <div className="product-details">
                <h6>{product.product_name}</h6>
                <p>Price: Rs {product.MRP}</p>
              </div>
            </div>
          ))}
        </div>

        {oils.length > initialDisplayLimit && (
          <button onClick={toggleOils} className="see-more-btn">
            {showAllOils ? "See Less" : "See More"}
          </button>
        )}
      </section>

      {/* Modal to show selected product details */}
      <ProductModal product={selectedProduct} onClose={closeModal} />
    </div>
  );
};

export default Products;
