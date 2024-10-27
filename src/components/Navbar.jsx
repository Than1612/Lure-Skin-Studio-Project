import React, { useState, useRef, useEffect } from "react";
import logo from "../attachments/logo2.png";
import "../components/Navbar.css";
import { IoHomeOutline } from "react-icons/io5";
import { CiPen } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { FaRegFileImage } from "react-icons/fa6";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);

  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
    if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
      setDropdownOpen2(false);
    }
    if (dropdownRef3.current && !dropdownRef3.current.contains(event.target)) {
      setDropdownOpen3(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    if (!dropdownOpen2 && !dropdownOpen3) {
      setDropdownOpen(!dropdownOpen);
    }
  };

  const toggleDropdown2 = () => {
    if (!dropdownOpen && !dropdownOpen3) {
      setDropdownOpen2(!dropdownOpen2);
    }
  };

  const toggleDropdown3 = () => {
    if (!dropdownOpen && !dropdownOpen2) {
      setDropdownOpen3(!dropdownOpen3);
    }
  };

  return (
    <div
      className="flex justify-between items-center py-6 px-3 md-3 relative z-10"
      style={{ background: "#fff4f4" }}
    >
      <img src={logo} alt="Logo" style={{ width: "18%" }} />

      <ul className="flex list-none gap-12 prata-regular">
        <li
          className="relative focus:outline-none flex bg-transparent border-none"
          onClick={toggleDropdown}
        >
          <IoHomeOutline size={20} className="mr-2" /> Home
          <svg
            width="1rem"
            height="1rem"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M7 10l5 5 5-5" />
            </g>
          </svg>
          {dropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute mt-2 w-40 bg-white shadow-lg rounded-md transition duration-300 ease-in-out"
            >
              <ul className="py-1 list-none text-left p-0">
                <li className="py-2 px-4 hover:bg-gray-200">Home 1</li>
                <li className="py-2 px-4 hover:bg-gray-200">Home 2</li>
                <li className="py-2 px-4 hover:bg-gray-200">Home 3</li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="relative focus:outline-none flex bg-transparent border-none"
          onClick={toggleDropdown2}
        >
          <AiOutlineShop size={20} className="mr-2" /> Shop
          <svg
            width="1rem"
            height="1rem"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M7 10l5 5 5-5" />
            </g>
          </svg>
          {dropdownOpen2 && (
            <div
              ref={dropdownRef2}
              className="absolute mt-2 w-40 bg-white shadow-lg rounded-md transition duration-300 ease-in-out"
            >
              <ul className="py-1 list-none text-left p-0">
                <li className="py-2 px-4 hover:bg-gray-200">Shop 1</li>
                <li className="py-2 px-4 hover:bg-gray-200">Shop 2</li>
                <li className="py-2 px-4 hover:bg-gray-200">Shop 3</li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="relative focus:outline-none flex bg-transparent border-none"
          onClick={toggleDropdown3}
        >
          <FaRegFileImage size={20} className="mr-2" /> Pages
          <svg
            width="1rem"
            height="1rem"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M7 10l5 5 5-5" />
            </g>
          </svg>
          {dropdownOpen3 && (
            <div
              ref={dropdownRef3}
              className="absolute mt-2 w-40 bg-white shadow-lg rounded-md transition duration-300 ease-in-out"
            >
              <ul className="py-1 list-none text-left p-0">
                <li className="py-2 px-4 hover:bg-gray-200">Page 1</li>
                <li className="py-2 px-4 hover:bg-gray-200">Page 2</li>
                <li className="py-2 px-4 hover:bg-gray-200">Page 3</li>
              </ul>
            </div>
          )}
        </li>
        <li>
          <CiPen size={20} className="mr-2" /> Blog
        </li>
        <li>
          <MdOutlinePhoneInTalk size={20} className="mr-2" /> Contact
        </li>
      </ul>

      <ul className="flex gap-6 list-none">
        <li>
          <svg
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
        <li>
          <svg
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z"
              fill="#0F0F0F"
            />
          </svg>
        </li>
        <li>Profile</li>
        <li>
          <svg
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
