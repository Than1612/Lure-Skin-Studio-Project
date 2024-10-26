import React, { useState } from "react";
import "./products.css";
import { soaps, oils, toners, scrubs } from "../soapData"; 
import { FaShoppingCart } from "react-icons/fa";
import ProductModal from "./Modal";

const Products = () => {
  const [sortBy, setSortBy] = useState(""); 
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filterByCategory, setFilterByCategory] = useState("");
  const [showMoreSoaps, setShowMoreSoaps] = useState(false);
  const [showMoreOils, setShowMoreOils] = useState(false);
  const [showMoreToners, setShowMoreToners] = useState(false);
  const [showMoreScrubs, setShowMoreScrubs] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product); 
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const sortProducts = (products, sortBy) => {
    const sortedProducts = [...products];
    if (sortBy === "available") {
      return sortedProducts.sort((a, b) => b.available - a.available);
    } else if (sortBy === "price") {
      return sortedProducts.sort((a, b) => a.MRP - b.MRP);
    }
    return products;
  };
  
  const filterAndSortProducts = (category, sortBy) => {
    let filteredProducts = {
      soaps: [],
      oils: [],
      toners: [],
      scrubs: []
    };

    // Based on the filter, assign the correct products to each original category
    if (category === "hair") {
      filteredProducts.oils = oils;  // Only oils come under Hair
    } else if (category === "body") {
      filteredProducts.soaps = soaps;  // Only soaps come under Body
    } else if (category === "face") {
      filteredProducts.soaps = soaps;  // Soaps also come under Face
      filteredProducts.toners = toners;
      filteredProducts.scrubs = scrubs;
    } else {
      // No filter: return all categories normally
      filteredProducts.soaps = soaps;
      filteredProducts.oils = oils;
      filteredProducts.toners = toners;
      filteredProducts.scrubs = scrubs;
    }

    // Sort each category based on the sortBy criteria
    return {
      soaps: sortProducts(filteredProducts.soaps, sortBy),
      oils: sortProducts(filteredProducts.oils, sortBy),
      toners: sortProducts(filteredProducts.toners, sortBy),
      scrubs: sortProducts(filteredProducts.scrubs, sortBy)
    };
  };

  const renderProducts = (products, showMore, setShowMore) => (
    <>
      <div className="product-grid">
        {products.slice(0, showMore ? products.length : 4).map((product, index) => (
          <div key={index} className="product-card" onClick={() => openModal(product)}>
            <img src={product.proImgs[0]} alt={product.product_name} className="product-image" />
            <div className="product-details text-left">
              <p className="product-price">Price: Rs {product.MRP}</p>
              <h6 className="product-name">{product.product_name}</h6>
            </div>
          </div>
        ))}
      </div>
      {products.length > 4 && (
        <button className="see-more-btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </>
  );

  const filteredProducts = filterAndSortProducts(filterByCategory, sortBy);

  return (
    <div className="product-container">
      <h1 className="custom-tagline">Feel the best version of you</h1>

    <div className="filter-container-wrapper">
    <div className="filter-sort-row">
    <div className="filter-container">
      <label htmlFor="filter">Filter By: </label>
      <select
        id="filter"
        value={filterByCategory}
        onChange={(e) => {
          setFilterByCategory(e.target.value);
          setSortBy(""); // Reset the sort filter when category changes
        }}
      >
        <option value="">All Products</option>
        <option value="hair">Hair</option>
        <option value="body">Body</option>
        <option value="face">Face</option>
      </select>
    </div>
    {filterByCategory && (
      <div className="sort-container">
        <label htmlFor="sort">Sort By: </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Select</option>
          <option value="price">Price</option>
          <option value="available">Availability</option>
        </select>
      </div>
    )}
  </div>
</div>


      {/* Conditional rendering: Only show categories that have products */}
      {filteredProducts.soaps.length > 0 && (
        <>
          <h2>Soaps</h2>
          {renderProducts(filteredProducts.soaps, showMoreSoaps, setShowMoreSoaps)}
        </>
      )}

      {filteredProducts.oils.length > 0 && (
        <>
          <h2>Oils</h2>
          {renderProducts(filteredProducts.oils, showMoreOils, setShowMoreOils)}
        </>
      )}

      {filteredProducts.toners.length > 0 && (
        <>
          <h2>Toners</h2>
          {renderProducts(filteredProducts.toners, showMoreToners, setShowMoreToners)}
        </>
      )}

      {filteredProducts.scrubs.length > 0 && (
        <>
          <h2>Scrubs</h2>
          {renderProducts(filteredProducts.scrubs, showMoreScrubs, setShowMoreScrubs)}
        </>
      )}

      <ProductModal product={selectedProduct} onClose={closeModal} />
    </div>
  );
};

export default Products;
