import React from "react";
import "./navigation.css"
import Button from "../Button/Button";
import {SearchIco, CartIco, UserIco} from "../icons/Icons.jsx"


function Navigation(){
    return(
        <div className="navi">
            <div className="navigation-content">
                    <div className="search-pannel">
                        <input type="text" className="search-input navi-font" placeholder={"Пошук..."}></input>
                        <Button><SearchIco ></SearchIco></Button>
                    </div>
                    <div className="menu-buttons">
                    <Button className="menu-button"><p className="navi-font">Меню</p></Button>
                    <Button ><CartIco></CartIco></Button>
                    <Button><UserIco></UserIco></Button>
                    </div>
            </div>
        </div>
    );
}

export default Navigation