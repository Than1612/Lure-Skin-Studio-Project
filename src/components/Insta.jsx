import React from "react";
import img1 from "../attachments/attachments1/i9.png";
import img2 from "../attachments/attachments1/i10.png";
import img3 from "../attachments/attachments1/i11.png";
import img4 from "../attachments/attachments1/i12.png";
import img5 from "../attachments/attachments1/i7.png";
 
const Insta=()=>{
   
    return(
        <div className="w-screen my-5 py-5">
            

            <h4 class="text-center py-3 " style={{
    fontFamily: "'Rockwell', 'Prata', serif",
    textAlign: "center",
    fontSize: "40px",
    marginBottom: "30px",
    fontWeight: "bold",
    color: "#2d2d2d",
    position: "relative"
}}
>Follow us on Instagram</h4>
            <div className="flex justify-center" style={{height:"40vh"}}>
                <img src={img1} className="w-1/5 shrink" style={{width:"18%"}}></img>
                <img src={img2} className="w-1/5 shrink" style={{width:"18%"}}></img>
                <img src={img3} className="w-1/5 shrink" style={{width:"18%"}}></img>
                <img src={img4} className="w-1/5 shrink" style={{width:"18%"}}></img>
                <img src={img5} className="w-1/5 shrink" style={{width:"18%"}}></img>
 
            </div>
        </div>
    )
}

export default Insta