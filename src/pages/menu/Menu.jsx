import React from "react";
import Button from "../shared/NavigationButton/Button";
import HomeIco from "../shared/icons/TEMP_Home_ico.svg"
import { Link } from "react-router-dom";

function Menu(){
    return(
        <div><Link to="/" ><Button><img className="ico" src={HomeIco} alt="home page" /></Button></Link></div>
    );
}

export default Menu;