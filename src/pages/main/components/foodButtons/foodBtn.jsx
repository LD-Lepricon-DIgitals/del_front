import React from 'react';
import SoupIco from "../../../shared/icons/food_icos/Soup_ico.svg"
import DessertIco from "../../../shared/icons/food_icos/Dessert_ico.svg"
import FastFoodIcon from "../../../shared/icons/food_icos/Fastfood_ico.svg"
import MeatIco from "../../../shared/icons/food_icos/Meat_ico.svg"
import SaladIco from "../../../shared/icons/food_icos/Salad_ico.svg"
import PastaIco from "../../../shared/icons/food_icos/Pasta_ico.svg"
import { Link } from "react-router-dom";
import "./foodBtn.css"

function FoodBtn({children}) {
    return (
        <button className = "food-btn">
            <div className = "btn-content">
                {children}
            </div>   
        </button>

    );
}

function Layout() {
    return (
            <div className="layout-row">
                <Link                 
                    to={{pathname: "/menu",}}
                    state={{group: "soup", }}>
                <FoodBtn>
                    <img className={"food-ico"} src={SoupIco}  alt='Soup'/>
                    <p className='food-btn-font'>Soups</p>
                </FoodBtn></Link>

                <Link                 
                    to={{pathname: "/menu",}}
                    state={{group: "dessert", }}>
                <FoodBtn>
                        <img className={"food-ico"} src={DessertIco}  alt='Desserts'/>
                        <p className='food-btn-font'>Desserts</p>
                </FoodBtn></Link>

                <Link                 
                    to={{pathname: "/menu",}}
                    state={{group: "pizza", }}>
                <FoodBtn>
                    <img className={"food-ico"} src={FastFoodIcon}  alt='Fast Food'/>
                    <p className='food-btn-font'>Fast Food</p>
                </FoodBtn></Link>

                <Link                 
                    to={{pathname: "/menu",}}
                    state={{group: "meat", }}>
                <FoodBtn>
                    <img className={"food-ico"} src={MeatIco}  alt='Meat'/> 
                    <p className='food-btn-font'>Meat</p>
                </FoodBtn></Link>

                <Link                 
                    to={{pathname: "/menu",}}
                    state={{group: "salad", }}>
                <FoodBtn>
                    <img className={"food-ico"} src={SaladIco}  alt='Salads'/>
                    <p className='food-btn-font'>Salads</p>
                </FoodBtn></Link>

                <Link                 
                    to={{pathname: "/menu",}}
                    state={{group: "pasta", }}>
                <FoodBtn>
                    <img className={"food-ico"} src={PastaIco}  alt='Pasta'/>
                    <p className='food-btn-font'>Pasta</p>
                </FoodBtn></Link>
            </div>
    );

    
}

export default Layout
