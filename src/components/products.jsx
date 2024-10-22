import React, { useState } from "react";
import "./products.css";
import { soaps, oils } from "../soapData"; // Assuming you import your data correctly
import { FaShoppingCart } from "react-icons/fa";
import ProductModal from "./Modal"; // Import the modal

const Products = () => {
  const [showAllSoaps, setShowAllSoaps] = useState(false);
  const [showAllOils, setShowAllOils] = useState(false);
  const [sortBy, setSortBy] = useState("");
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

  const sortProducts = (products) => {
    const sortedProducts = [...products]; // Create a copy to avoid mutating original array
    if (sortBy === "ratings") {
      return sortedProducts.sort((a, b) => b.ratings - a.ratings);
    } else if (sortBy === "purchases") {
      return sortedProducts.sort((a, b) => b.purchases - a.purchases);
    } else if (sortBy === "price") {
      return sortedProducts.sort((a, b) => a.MRP - b.MRP);
    } else if (sortBy === "arrival") {
      return sortedProducts.sort((a, b) => new Date(a.arrivalDate) - new Date(b.arrivalDate));
    }
    return sortedProducts;
  };

  return (
    <div className="product-container">
      <h1 className="tagline">Tag Line For Lure</h1>

      {/* Sort Dropdown */}
      <div className="sort-container">
        <label htmlFor="sort">Sort By: </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Select</option>
          <option value="ratings">Ratings</option>
          <option value="purchases">Number of Purchases</option>
          <option value="price">Price</option>
          <option value="arrival">Arrival Date</option>
        </select>
      </div>

      {/* Soaps Section */}
      <section className="soap-section">
        <h2>Soaps</h2>
        <div className={`product-grid ${showAllSoaps ? "expand" : ""}`}>
          {sortProducts(showAllSoaps ? soaps : soaps.slice(0, initialDisplayLimit)).map((product, index) => (
            <div key={index} className="product-card" onClick={() => openModal(product)}>
              <img src={product.proImgs[0]} alt={product.product_name} className="product-image" />
              <div className="product-details text-left">
                <p className="product-price">Price: Rs {product.MRP}</p>
                <h6 className="product-name">{product.product_name}</h6>
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
          {sortProducts(showAllOils ? oils : oils.slice(0, initialDisplayLimit)).map((product, index) => (
            <div key={index} className="product-card" onClick={() => openModal(product)}>
              <img src={product.proImgs[0]} alt={product.product_name} className="product-image" />
              <div className="product-details text-left">
                <p className="product-price">Price: Rs {product.MRP}</p>
                <h6 className="product-name">{product.product_name}</h6>
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
