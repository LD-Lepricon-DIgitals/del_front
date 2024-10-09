import React from 'react';
import SoupIco from "../../../shared/icons/food_icos/Soup_ico.svg"
import DessertIco from "../../../shared/icons/food_icos/Dessert_ico.svg"
import FastFoodIcon from "../../../shared/icons/food_icos/Fastfood_ico.svg"
import MeatIco from "../../../shared/icons/food_icos/Meat_ico.svg"
import SaladIco from "../../../shared/icons/food_icos/Salad_ico.svg"
import PastaIco from "../../../shared/icons/food_icos/Pasta_ico.svg"
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
                <FoodBtn>
                    <img className={"food-ico"} src={SoupIco}  alt='Soup'/>
                    <p className='food-btn-font'>Soups</p>
                </FoodBtn>

                <FoodBtn>
                        <img className={"food-ico"} src={DessertIco}  alt='Desserts'/>
                        <p className='food-btn-font'>Desserts</p>
                </FoodBtn>
                <FoodBtn>
                    <img className={"food-ico"} src={FastFoodIcon}  alt='Fast Food'/>
                    <p className='food-btn-font'>Fast Food</p>
                </FoodBtn>
                <FoodBtn>
                    <img className={"food-ico"} src={MeatIco}  alt='Meat'/> 
                    <p className='food-btn-font'>Meat</p>
                </FoodBtn>
                <FoodBtn>
                    <img className={"food-ico"} src={SaladIco}  alt='Salads'/>
                    <p className='food-btn-font'>Salads</p>
                </FoodBtn>
                <FoodBtn>
                    <img className={"food-ico"} src={PastaIco}  alt='Pasta'/>
                    <p className='food-btn-font'>Pasta</p>
                </FoodBtn>
            </div>
    );

    
}

export default Layout
