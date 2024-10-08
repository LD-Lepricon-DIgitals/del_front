import React from "react";
import Button from "../shared/NavigationButton/Button";
import HomeIco from "../shared/icons/TEMP_Home_ico.svg"
import { Link } from "react-router-dom";

function Cart() {
    return(
        <div><Link to="/" ><Button><img className="ico" src={HomeIco} alt="dom, kotorogo net" /></Button></Link></div>
    );
}

export default Cart;