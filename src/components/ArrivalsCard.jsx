import React from "react";

const ArrivalsCard = ({ img, name, price }) => {
  return (
    <div className="card" style={styles.card}>
      <img
        src={img}
        alt={name}
        className="product-image"
        style={styles.image}
      />
      <h3 className="product-name" style={styles.name}>{name}</h3>
      <p className="product-price" style={styles.price}>{price}</p>
    </div>
  );
};

const styles = {
  card: {
    textAlign: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#f9dcdc", 
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", 
    padding: "16px",
    transition: "transform 0.2s",
  },
  image: {
    width: "100%",
    height: "100%", // Fixed height for consistency
    objectFit: "cover", // Maintain aspect ratio within the fixed height
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  name: {
    fontSize: "1.5em", 
    margin: "10px 0", 
  },
  price: {
    fontSize: "1.2em", 
  },
};

export default ArrivalsCard;
