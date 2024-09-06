import React from "react";

const ArrivalsCard = ({ img, name, price }) => {
  return (
    <div className="card" style={{ width: "250px", textAlign: "center" }}>
      <img src={img} alt={name} className="product-image" style={{ width: "100%" }} />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price}</p>
    </div>
  );
};

export default ArrivalsCard;
