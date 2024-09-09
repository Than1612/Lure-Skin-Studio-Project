import React from "react";
import logo from "../attachments/logo2.png";
const Footer = () => {

    return (
        <div className="w-full flex justify-around">
            <div><img src={logo}></img> <div class="social-links">

            </div>

            </div>
            <div> <h6>Quick Links</h6>
                <ul className="list-none">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul></div>
            <div> <h6>Help & Info</h6>
                <ul className="list-none">
                    <li>Return + Exchange</li>
                    <li>Shipping + Delivery</li>
                    <li>Contact Us</li>
                    <li>FAQs</li>
                </ul></div>
            <div> <h6>Contact Us</h6>
                <ul className="list-none">
                    <li>Do you have any questions or suggestions?</li>
                    <li>swathika5656@gmail.com</li>
                    <li>Do you need support? Give us a call.</li>
                    <li>+91 8778081625</li>
                </ul></div>
        </div>
    )

}

export default Footer