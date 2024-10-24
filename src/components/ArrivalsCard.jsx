import React from "react";

const ArrivalsCard = ({ img, name, price }) => {
  return (
    <div
      className="card"
      style={{ textAlign: "center", width: "100%", height: "100%" }}
    >
      <img
        src={img}
        alt={name}
        className="product-image"
        style={{ width: "100%", height: "auto" }}
      />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price}</p>
    </div>
  );
};

export default ArrivalsCard;
