import React from "react";
import logo from "../attachments/logo2.png";
const Navbar=()=>{

    return(

        <div className="flex justify-around items-center" style={{background: "#F6E7E5"}}>
            <img src={logo} className="w-1/5"></img>
            <ul className="flex gap-6">
                <li>Home</li>
                <li>Shop</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>

            <ul className="flex gap-6">
                <li>Like</li>
                <li>Cart</li>
                <li>Profile</li>
                <li>Search</li>
            </ul>

        </div>
    )
}

export default Navbar;