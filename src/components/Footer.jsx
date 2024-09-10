import React from "react";
import logo from "../attachments/logo2.png";

const Footer = () => {
  return (
    <div className="w-full flex justify-between items-start" style={{ padding: '40px 0', textAlign: 'left' }}>
      <div style={{ flex: 1 }}>
        <img src={logo} alt="Logo" style={{ marginBottom: "30px" }} />
        <div className="social-links"></div>
      </div>

      <div style={{
        flex: 1,
        fontFamily: "'Rockwell', 'Prata', serif",
        fontSize: "18px",
        color: "#2d2d2d"
      }}>
        <h5 className="widget-title text-uppercase mb-4" style={{ fontSize: "20px" }}>
          Quick Links
        </h5>
        <ul className="list-none menu-list list-unstyled text-uppercase fs-6">
          <li className="menu-item mb-2">Home</li>
          <li className="menu-item mb-2">About</li>
          <li className="menu-item mb-2">Services</li>
          <li className="menu-item mb-2">Contact</li>
        </ul>
      </div>

      <div style={{
        flex: 1,
        fontFamily: "'Rockwell', 'Prata', serif",
        fontSize: "18px",
        color: "#2d2d2d"
      }}>
        <h5 className="widget-title text-uppercase mb-4" style={{ fontSize: "20px" }}>
          Help & Info
        </h5>
        <ul className="list-none menu-list list-unstyled text-uppercase fs-6">
          <li className="menu-item mb-2">Return + Exchange</li>
          <li className="menu-item mb-2">Shipping + Delivery</li>
          <li className="menu-item mb-2">Contact Us</li>
          <li className="menu-item mb-2">FAQs</li>
        </ul>
      </div>

      <div style={{
        flex: 1,
        fontFamily: "'Rockwell', 'Prata', serif",
        fontSize: "18px",
        color: "#2d2d2d"
      }}>
        <h5 className="widget-title text-uppercase mb-4 " style={{ fontSize: "20px" }}>
          Contact Us
        </h5>
        <ul className="list-none menu-list list-unstyled text-uppercase fs-6">
          <li className="menu-item mb-2">Do you have any questions or suggestions?</li>
          <li className="menu-item mb-2">swathika5656@gmail.com</li>
          <li className="menu-item mb-2">Do you need support? Give us a call.</li>
          <li className="menu-item mb-2">+91 8778081625</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
