import React from "react";

const ArrivalsCard=(props)=>{

    return(
        <div  style={{width:"20vw"}}>
            <img src={props.img}>
            </img>
            <span>{props.name}</span>
            <span>{props.price}</span>
        </div>
    )
}

export default ArrivalsCard;