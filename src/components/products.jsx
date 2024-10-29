import React, { useEffect, useState } from "react";
import "./products.css";
import { soaps, oils, toners, scrubs, shower_gel, aloevera_gel} from "../soapData"; 
import { FaShoppingCart } from "react-icons/fa";
import ProductModal from "./Modal";

const Products = () => {
  useEffect(()=>{window.scrollTo(0,0);},[]);
  const [sortBy, setSortBy] = useState(""); 
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filterByCategory, setFilterByCategory] = useState("");
  const [showMoreSoaps, setShowMoreSoaps] = useState(false);
  const [showMoreOils, setShowMoreOils] = useState(false);
  const [showMoreToners, setShowMoreToners] = useState(false);
  const [showMoreScrubs, setShowMoreScrubs] = useState(false);
  const [showMoreShowerGel, setShowMoreShowerGel] = useState(false);
  const [showMoreAloveraGel, setShowMoreAloveraGel] = useState(false);
  const [showQuantitySelector, setShowQuantitySelector] = useState(null);
  const [quantity, setQuantity] = useState(1);

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
      scrubs: [],
      shower_gel: [],
      aloevera_gel: []
    };

    if (category === "hair") {
      filteredProducts.oils = oils;
      filteredProducts.aloevera_gel = aloevera_gel; // Include Aloe Vera Gel in hair category
    } else if (category === "body") {
      filteredProducts.soaps = soaps;
      filteredProducts.shower_gel = shower_gel;
      filteredProducts.aloevera_gel = aloevera_gel; // Include Aloe Vera Gel in body category
    } else if (category === "face") {
      filteredProducts.soaps = soaps;
      filteredProducts.toners = toners;
      filteredProducts.scrubs = scrubs;
      filteredProducts.aloevera_gel = aloevera_gel;
    } else {
      filteredProducts.soaps = soaps;
      filteredProducts.oils = oils;
      filteredProducts.toners = toners;
      filteredProducts.scrubs = scrubs;
      filteredProducts.shower_gel = shower_gel;
      filteredProducts.aloevera_gel = aloevera_gel;
    }

    return {
      soaps: sortProducts(filteredProducts.soaps, sortBy),
      oils: sortProducts(filteredProducts.oils, sortBy),
      toners: sortProducts(filteredProducts.toners, sortBy),
      scrubs: sortProducts(filteredProducts.scrubs, sortBy),
      shower_gel: sortProducts(filteredProducts.shower_gel, sortBy),
      aloevera_gel: sortProducts(filteredProducts.aloevera_gel, sortBy)
    };
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleConfirm = () => {
    console.log(`Added ${quantity} of ${showQuantitySelector.product_name} to cart.`);
    setShowQuantitySelector(null);
    setQuantity(1);
  };

  const handleCancel = () => {
    setShowQuantitySelector(null);
    setQuantity(1);
  };

  const renderProducts = (products, showMore, setShowMore) => (
    <>
      <div className="product-grid">
        {products.slice(0, showMore ? products.length : 4).map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.proImgs[0]} alt={product.product_name} className="product-image" onClick={() => openModal(product)} />
            <FaShoppingCart 
              className="cart-icon" 
              onClick={() => {
                setShowQuantitySelector(product);
                setQuantity(1);
              }} 
            /> 
            <div className="product-details text-left">
              <p className="product-price">Price: Rs {product.MRP}</p>
              <h6 className="product-name">{product.product_name}</h6>
            </div>

            {showQuantitySelector === product && (
              <div className="quantity-selector">
                <div className="quantity-controls">
                  <button onClick={handleDecrement}>-</button>
                  <span>{quantity}</span>
                  <button onClick={handleIncrement}>+</button>
                </div>
                <div className="quantity-actions">
                  <button onClick={handleConfirm} className="confirm-btn">Confirm</button>
                  <button onClick={handleCancel} className="cancel-btn">Cancel</button>
                </div>
              </div>
            )}

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
                setSortBy("");
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

      {filteredProducts.shower_gel.length > 0 && (
        <>
          <h2>Shower Gels</h2>
          {renderProducts(filteredProducts.shower_gel, showMoreShowerGel, setShowMoreShowerGel)}
        </>
      )}

      {filteredProducts.aloevera_gel.length > 0 && (
        <>
          <h2>Aloe Vera Gel</h2>
          {renderProducts(filteredProducts.aloevera_gel, showMoreAloveraGel, setShowMoreAloveraGel)}
        </>
      )}

      <ProductModal product={selectedProduct} onClose={closeModal} />
    </div>
  );
};

export default Products;
