import React, { useState } from "react";
import "./products.css"; 
import { soaps, oils } from "../soapData"; 
import { FaShoppingCart } from "react-icons/fa"; 

const Products = () => {
  const [showAllSoaps, setShowAllSoaps] = useState(false);
  const [showAllOils, setShowAllOils] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const initialDisplayLimit = 4;

  const toggleSoaps = () => {
    setShowAllSoaps(!showAllSoaps);
  };

  const toggleOils = () => {
    setShowAllOils(!showAllOils);
  };

  const sortProducts = (products) => {
    if (sortBy === "ratings") {
      return products.sort((a, b) => b.ratings - a.ratings);
    } else if (sortBy === "purchases") {
      return products.sort((a, b) => b.purchases - a.purchases);
    } else if (sortBy === "price") {
      return products.sort((a, b) => a.MRP - b.MRP);
    } else if (sortBy === "arrival") {
      return products.sort((a, b) => new Date(a.arrivalDate) - new Date(b.arrivalDate));
    }
    return products;
  };

  return (
    <div className="product-container">
      <h1 className="tagline">Tag Line For Lure</h1>

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

      <section className="soap-section">
        <h2>Soaps</h2>
        <div className={`product-grid ${showAllSoaps ? "expand" : ""}`}>
          {sortProducts(showAllSoaps ? soaps : soaps.slice(0, initialDisplayLimit)).map((product, index) => (
            <div key={index} className="product-card">
              <div className="cover">
                <ul className="benefits-list">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-left">{benefit}</li>
                  ))}
                </ul>
                <div className="flex flex-row justify-around align-items-center">
                  <span style={{maxWidth:'50%'}}>Price: Rs {product.MRP}</span>
                  <span style={{maxWidth:'50%'}}>{product.product_name}</span>
                </div>
                <div className="add-to-cart flex justify-end pr-2 pb-2">
                  <FaShoppingCart className="cart-icon" style={{height:'2em',width:'2em'}} />
                </div>
              </div>
              <img src={product.proImg} alt={product.product_name} className="product-image" />
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

      <section className="oil-section">
        <h2>Oils</h2>
        <div className={`product-grid ${showAllOils ? "expand" : ""}`}>
          {sortProducts(showAllOils ? oils : oils.slice(0, initialDisplayLimit)).map((product, index) => (
            <div key={index} className="product-card">
              <div className="cover">
                <ul className="benefits-list">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-left">{benefit}</li>
                  ))}
                </ul>
                <div className="flex flex-row justify-around align-items-center">
                  <span style={{maxWidth:'50%'}}>Price: Rs {product.MRP}</span>
                  <span style={{maxWidth:'50%'}}>{product.product_name}</span>
                </div>
                <div className="add-to-cart flex justify-end pr-2 pb-2">
                  <FaShoppingCart className="cart-icon" style={{height:'2em',width:'2em'}} />
                </div>
              </div>
              <img src={product.proImg} alt={product.product_name} className="product-image" />
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
    </div>
  );
};

export default Products;
