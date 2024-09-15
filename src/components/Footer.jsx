import React from "react";
import logo from "../attachments/logo2.png";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" class="mt-5">
      <div class="container">
        <div class="row d-flex flex-wrap justify-content-between py-5">
          <div class="col-md-4 col-sm-6">
            <div class="footer-menu footer-menu-001">
              <div class="footer-intro mb-4">
                <a href="index.html">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <div class="social-links">
                <ul class="list-unstyled d-flex flex-wrap gap-4">
                  <li>
                    <a
                      href="https://www.instagram.com/lure_skinstudio?igsh=bW80bmoydDBvaHM3"
                      class=""
                    >
                      <svg
                        width="55"
                        height="55"
                        viewBox="0 0 24 24"
                        class="svg-color"
                      >
                        <FaInstagram />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-2 col-sm-6">
            <div class="footer-menu footer-menu-002">
              <h5 class="widget-title text-uppercase mb-4">Quick Links</h5>
              <ul class="menu-list list-unstyled text-uppercase border-animation-left fs-6">
                <li class="menu-item mb-2">
                  <a href="index.html" class="item-anchor">
                    Home
                  </a>
                </li>
                <li class="menu-item mb-2">
                  <a href="shop.html" class="item-anchor">
                    About
                  </a>
                </li>
                <li class="menu-item mb-2">
                  <a href="blog.html" class="item-anchor">
                    Services
                  </a>
                </li>
                <li class="menu-item mb-2">
                  <a href="#" class="item-anchor">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-2 col-sm-6">
            <div class="footer-menu footer-menu-003">
              <h5 class="widget-title text-uppercase mb-4">Help & Info</h5>
              <ul class="menu-list list-unstyled text-uppercase border-animation-left fs-6">
                <li class="menu-item mb-2">
                  <a href="#" class="item-anchor">
                    Return + Exchange
                  </a>
                </li>
                <li class="menu-item mb-2">
                  <a href="#" class="item-anchor">
                    Shipping + Delivery
                  </a>
                </li>
                <li class="menu-item mb-2">
                  <a href="#" class="item-anchor">
                    Contact Us
                  </a>
                </li>
                <li class="menu-item mb-2">
                  <a href="faqs.html" class="item-anchor">
                    Faqs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="footer-menu footer-menu-004 border-animation-left">
              <h5 class="widget-title text-uppercase mb-4">Contact Us</h5>
              <p>
                Do you have any questions or suggestions?{" "}
                <a href="swathika5656@gmail.com" class="item-anchor">
                  swathika5656@gmail.com
                </a>
              </p>
              <p>
                Do you need support? Give us a call.{" "}
                <a href="tel:+91 8778081625" class="item-anchor">
                  +91 8778081625
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="border-top py-4">
        <div class="container">
          <div class="row">
            <div class="col-md-6 d-flex flex-wrap"></div>
            <div class="col-md-6 text-md-end mt-3 mt-md-0">
              <p>© Copyright 2023. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
