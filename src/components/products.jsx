/*
import React from "react";

const products=()=>{

    return(
        "Hello world"
    )
}

export default products;
*/


import React from "react";
import "./products.css"; 

const products = () => {
  // Sample data for products
  const productList = [
    { id: 1, name: "Product 1", price: "$XX", description: "A little info...", imageUrl: "/path/to/image" },
    { id: 2, name: "Product 2", price: "$XX", description: "A little info...", imageUrl: "/path/to/image" },
    { id: 3, name: "Product 3", price: "$XX", description: "A little info...", imageUrl: "/path/to/image" },
  ];

  return (
    <div className="product-container">
      <h1 className="tagline">Tag Line For Lure</h1>
      <div className="product-grid">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-details">
              <p className="product-price">Price: {product.price}</p>
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default products;
