import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../attachments/logo2.png";
import "../components/Navbar.css";
import { IoHomeOutline } from "react-icons/io5";
import { CiPen } from "react-icons/ci";
import { AiOutlineShop } from "react-icons/ai";
import { FaRegFileImage } from "react-icons/fa6";

const Navbar = () => {
  const navigate = useNavigate(); 
  return (
    <div
      className="flex justify-between items-center py-6 px-0 px-3 md-3 relative z-10"
      style={{ background: "#fff4f4" }}
    >
      <img src={logo} alt="Logo" style={{ width: "18%" }} />

      <ul className="flex gap-6 list-none gap-12 prata-regular">
        <li className="relative focus:outline-none flex bg-transparent border-none navbar-item" onClick={() => navigate("/")}>
          <IoHomeOutline size={20} className="mr-2" /> Home
        </li>
        <li className="relative focus:outline-none flex bg-transparent border-none navbar-item" onClick={() => navigate("/products")}>
          <AiOutlineShop size={20} className="mr-2" /> Shop
        </li>
        <li className="relative focus:outline-none flex bg-transparent border-none navbar-item" onClick={() => navigate("/policy")}>
          <FaRegFileImage size={20} className="mr-2" /> Policy
        </li>
        <li className="navbar-item" onClick={() => navigate("/blog")}>
          <CiPen size={20} className="mr-2" /> Blog
        </li>
      </ul>

      <ul className="flex gap-6 list-none">
<li>
  {/* Clickable cart icon with underline on hover */}
  <a href="#" className="icon-link">
    <svg
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z"
        fill="#0F0F0F"
      />
    </svg>
  </a>
</li>


<li>
  {/* Clickable Profile text with underline on hover */}
  <a href="#" className="icon-link font-bold">Profile</a>
</li>
      </ul>
    </div>
  );
};

export default Navbar;

