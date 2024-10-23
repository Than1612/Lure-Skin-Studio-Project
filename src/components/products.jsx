import React, { useState } from "react";
import "./products.css";
import { soaps, oils } from "../soapData"; 
import { FaShoppingCart } from "react-icons/fa";
import ProductModal from "./Modal";

const Products = () => {
  const [sortBy, setSortBy] = useState(""); 
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filterByCategory, setFilterByCategory] = useState("");
  const [showMoreSoaps, setShowMoreSoaps] = useState(false);
  const [showMoreOils, setShowMoreOils] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product); 
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const sortProducts = (products) => {
    const sortedProducts = [...products];
    if (sortBy === "ratings") {
      return sortedProducts.sort((a, b) => b.ratings - a.ratings);
    } else if (sortBy === "purchases") {
      return sortedProducts.sort((a, b) => b.purchases - a.purchases);
    } else if (sortBy === "price") {
      return sortedProducts.sort((a, b) => a.MRP - b.MRP);
    } else if (sortBy === "arrival") {
      return sortedProducts.sort((a, b) => new Date(b.arrivalDate) - new Date(a.arrivalDate));
    }
    return products;
  };

  const filterAndSortProducts = (category) => {
    let filteredProducts = [];
    if (category === "soaps") filteredProducts = soaps;
    if (category === "oils") filteredProducts = oils;
    return sortProducts(filteredProducts);
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

  return (
    <div className="product-container">
      <h1 className="tagline">Tag Line For Lure</h1>

      <div className="filter-sort-row">
        <div className="filter-container">
          <label htmlFor="filter">Filter By: </label>
          <select
            id="filter"
            value={filterByCategory}
            onChange={(e) => setFilterByCategory(e.target.value)}
          >
            <option value="">All Products</option>
            <option value="soaps">Soaps</option>
            <option value="oils">Oils</option>
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
              <option value="ratings">Ratings</option>
              <option value="purchases">Number of Purchases</option>
              <option value="price">Price</option>
              <option value="arrival">Arrival Date</option>
            </select>
          </div>
        )}
      </div>

      {filterByCategory === "soaps" || filterByCategory === "" ? (
        <>
          <h2>Soaps Products</h2>
          {renderProducts(filterAndSortProducts("soaps"), showMoreSoaps, setShowMoreSoaps)}
        </>
      ) : null}

      {filterByCategory === "oils" || filterByCategory === "" ? (
        <>
          <h2>Oils Products</h2>
          {renderProducts(filterAndSortProducts("oils"), showMoreOils, setShowMoreOils)}
        </>
      ) : null}

      <ProductModal product={selectedProduct} onClose={closeModal} />
    </div>
  );
};

export default Products;
