import React, { useState } from "react";
import "./products.css"; 
import { soaps, oils } from "../soapData"; // Assuming you import your data correctly
import { FaShoppingCart } from "react-icons/fa"; // Importing the shopping cart icon from react-icons

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
              {/* Product Cover */}
              <div className="cover">
                {/* Benefits List */}
                <ul className="benefits-list">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-left">{benefit}</li>
                  ))}
                </ul>

                {/* Price and Name */}
                <div className="flex flex-row justify-around align-items-center">
                  <span style={{maxWidth:'50%'}}>Price: Rs {product.MRP}</span>
                  <span style={{maxWidth:'50%'}}>{product.product_name}</span>
                </div>

                {/* Add to Cart Icon */}
                <div className="add-to-cart flex justify-end pr-2 pb-2">
                  <FaShoppingCart className="cart-icon" style={{height:'2em',width:'2em'}} />
                </div>
              </div>

              {/* Product Image */}
              <img src={product.proImg} alt={product.product_name} className="product-image" />

              {/* Product Details */}
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
          {(showAllOils ? oils : oils.slice(0, initialDisplayLimit)).map((product, index) => (
            <div key={index} className="product-card">
            {/* Product Cover */}
            <div className="cover">
              {/* Benefits List */}
              <ul className="benefits-list">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-left">{benefit}</li>
                ))}
              </ul>

              {/* Price and Name */}
              <div className="flex flex-row justify-around align-items-center">
                <span style={{maxWidth:'50%'}}>Price: Rs {product.MRP}</span>
                <span style={{maxWidth:'50%'}}>{product.product_name}</span>
              </div>

              {/* Add to Cart Icon */}
              <div className="add-to-cart flex justify-end pr-2 pb-2">
                <FaShoppingCart className="cart-icon" style={{height:'2em',width:'2em'}} />
              </div>
            </div>

            {/* Product Image */}
            <img src={product.proImg} alt={product.product_name} className="product-image" />

            {/* Product Details */}
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
