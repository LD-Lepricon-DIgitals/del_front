import React from "react";
import "./circle.css"
import Salad from "../../../shared/img/Salad.svg"

function Circle() {
    return(
        <div className="circle">
            <img className="salad-pic" src={Salad} alt='Salad' />
        </div>
    );
    
}

export default Circle;