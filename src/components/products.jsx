import React, { useState } from "react";
import "./products.css"; 
import { soaps, oils } from "../soapData"; // Assuming you import your data correctly

const Products = () => {
  const [showAllSoaps, setShowAllSoaps] = useState(false);
  const [showAllOils, setShowAllOils] = useState(false);

  const initialDisplayLimit = 4;

  const toggleSoaps = () => {
    setShowAllSoaps(!showAllSoaps);
  };

  const toggleOils = () => {
    setShowAllOils(!showAllOils);
  };

  return (
    <div className="product-container">
      <h1 className="tagline">Tag Line For Lure</h1>

      {/* Soaps Section */}
      <section className="soap-section">
        <h2>Soaps</h2>
        <div className={`product-grid ${showAllSoaps ? "expand" : ""}`}>
          {(showAllSoaps ? soaps : soaps.slice(0, initialDisplayLimit)).map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.proImg} alt={product.product_name} className="product-image" />
              <div className="product-details">
                <p className="product-price">Price: {product.MRP}</p>
                <h2 className="product-name">{product.product_name}</h2>
                <p className="product-description">{product.benefits[0]}</p>
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
        <div className={`product-grid ${showAllOils ? "expand" : ""}`}>
          {(showAllOils ? oils : oils.slice(0, initialDisplayLimit)).map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.proImg} alt={product.product_name} className="product-image" />
              <div className="product-details">
                <p className="product-price">Price: {product.MRP}</p>
                <h2 className="product-name">{product.product_name}</h2>
                <p className="product-description">{product.benefits[0]}</p>
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
    </div>
  );
};

export default Products;
