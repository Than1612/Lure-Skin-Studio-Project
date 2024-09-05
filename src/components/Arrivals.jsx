import React from "react";
import ArrivalsCard from "./ArrivalCard";
import img1 from "../attachments/attachments1/i1.png"
import img2 from "../attachments/attachments1/i2.png"
import img3 from "../attachments/attachments1/i3.png"
import img4 from "../attachments/attachments1/i4.png"
const Arrivals=()=>{

    return(
        <div className="flex  gap-10 justify-around h-2/5 overflow-x-scroll" style={{width:"100vw"}}>
            <ArrivalsCard img={img1} name="Sample" price="$200.00"/>
            <ArrivalsCard img={img2} name="Sample" price="$100.00"/>
            <ArrivalsCard img={img3} name="Sample" price="$100.00"/>
            <ArrivalsCard img={img4} name="Sample" price="$100.00"/>
            <ArrivalsCard img={img3} name="Sample" price="$100.00"/>
        </div>
    )
}

export default Arrivals;