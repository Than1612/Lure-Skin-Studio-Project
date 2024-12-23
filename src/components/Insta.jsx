import React from "react";
import img1 from "../attachments/attachments1/i9.png";
import img2 from "../attachments/attachments1/i10.png";
import img3 from "../attachments/attachments1/i11.png";
import img4 from "../attachments/attachments1/i12.png";
import img5 from "../attachments/attachments1/i7.png";

const Insta = () => {
  return (
    <div className="w-screen my-5 py-5 px-4">
      <h4
        className="text-center py-3"
        style={{
          fontFamily: "'Rockwell', 'Prata', serif",
          fontSize: "40px",
          marginBottom: "30px",
          fontWeight: "bold",
          color: "#2d2d2d",
        }}
      >
        Follow us on Instagram
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <img
          src={img1}
          className="w-full h-auto object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-300"
          alt="Instagram 1"
        />
        <img
          src={img2}
          className="w-full h-auto object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-300"
          alt="Instagram 2"
        />
        <img
          src={img3}
          className="w-full h-auto object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-300"
          alt="Instagram 3"
        />
        <img
          src={img4}
          className="w-full h-auto object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-300"
          alt="Instagram 4"
        />
        <img
          src={img5}
          className="w-full h-auto object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-300"
          alt="Instagram 5"
        />
      </div>
    </div>
  );
};

export default Insta;
