import React from "react";
import "../components/extra.css";
import img1 from "../attachments/attachments2/img8.png";
const Extra = () => {

    return (
        <div className=" flex" style={{height:"150vh"}} >
            <div style={{ backgroundImage: `url(${img1})` }} className="w-1/2 flex items-center">
                <div style={{border: "3px solid white"}}   className="ml-20 p-12 flex flex-col" >
                    <h2 style={{color:"#FFFFFF",fontSize:"4rem"}} className="prata-regular my-2">SKIN CARE</h2>
                    <button style={{color:"#FFFFFF",fontSize:"1rem",letterSpacing:"0.03rem"}} className="prata-regular bg-transparent px-1.5 py-3 w-2/5 shop-btn">SHOP NOW</button>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${img1})` }} className="w-1/2 flex items-center">
                <div style={{border: "3px solid white"}}   className=" p-12 flex flex-col" >
                    <h2 style={{color:"#FFFFFF",fontSize:"4rem"}} className="prata-regular my-2">SKIN CARE</h2>
                    <button style={{color:"#FFFFFF",fontSize:"1rem",letterSpacing:"0.03rem"}} className="prata-regular bg-transparent px-1.5 py-3 w-2/5 shop-btn">SHOP NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Extra;