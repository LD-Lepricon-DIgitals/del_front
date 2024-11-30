import React from "react";
import { Link } from "react-router-dom";
import HomeButton from '../shared/HomeButton/HomeButton'
import Navbar from "../shared/navigation/navigation.jsx"

function Menu(){
    return(
        <div>
            <Navbar/>
            <Link to="/"><HomeButton/></Link>
        </div>
    );
}

export default Menu;