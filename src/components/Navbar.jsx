import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../attachments/logo2.png";
import "../components/Navbar.css";
import { IoHomeOutline } from "react-icons/io5";
import { CiPen } from "react-icons/ci";
import { AiOutlineShop } from "react-icons/ai";
import { FaRegFileImage } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { BsCart, BsPerson } from "react-icons/bs";

const Navbar = () => {
  const navigate = useNavigate();
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => setShowFilterOptions((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="navbar-container">
      <div className="flex justify-between items-center navbar">
        <img src={logo} alt="Logo" className="logo" />

        {/* Hamburger Menu */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        {/* Desktop Navbar */}
        <ul className={`desktop-navbar md:flex md:gap-10 hidden`}>
          <li className="navbar-item" onClick={() => navigate("/")}>
            <IoHomeOutline size={20} className="mr-2" /> Home
          </li>
          <li className="navbar-item" onClick={toggleDropdown}>
            <AiOutlineShop size={20} className="mr-2" /> Shop
            {showFilterOptions && (
              <ul className="dropdown-menu">
                <li onClick={() => navigate("/products?category=hair")}>Hair</li>
                <li onClick={() => navigate("/products?category=body")}>Body</li>
                <li onClick={() => navigate("/products?category=face")}>Face</li>
              </ul>
            )}
          </li>
          <li className="navbar-item" onClick={() => navigate("/policy")}>
            <FaRegFileImage size={20} className="mr-2" /> Policy
          </li>
          <li className="navbar-item" onClick={() => navigate("/blog")}>
            <CiPen size={20} className="mr-2" /> Blog
          </li>
        </ul>

        {/* Profile and Cart Icons for Desktop View */}
        
        <ul className={`flex gap-6`} style={{ listStyle: "none" }}>
          <li onClick={() => navigate("/cart")} className="cursor-pointer">
            <BsCart size={24} />
          </li>
          <li onClick={() => navigate("/profile")} className="cursor-pointer">
            <BsPerson size={24} />
          </li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      {isMenuOpen && (
        <ul className="mobile-navbar">
          <li className="navbar-item" onClick={() => navigate("/")}>
            <IoHomeOutline size={20} className="mr-2" /> Home
          </li>
          <li className="navbar-item">
            <div onClick={toggleDropdown} className="flex items-center">
              <AiOutlineShop size={20} className="mr-2" /> Shop
            </div>
            {showFilterOptions && (
              <ul className="dropdown-menu-mobile">
                <li onClick={() => navigate("/products?category=hair")}>Hair</li>
                <li onClick={() => navigate("/products?category=body")}>Body</li>
                <li onClick={() => navigate("/products?category=face")}>Face</li>
              </ul>
            )}
          </li>
          <li className="navbar-item" onClick={() => navigate("/policy")}>
            <FaRegFileImage size={20} className="mr-2" /> Policy
          </li>
          <li className="navbar-item" onClick={() => navigate("/blog")}>
            <CiPen size={20} className="mr-2" /> Blog
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
