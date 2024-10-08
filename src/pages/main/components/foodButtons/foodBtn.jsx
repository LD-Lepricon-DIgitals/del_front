import React from 'react';
import cl from './foodBtn.css';
import {SoupsIcon, DessertsIcon, FastFoodIcon, MeatIcon, SaladsIcon, PastaIcon} from '../icons/FoodIcons';



function Layout() {
    return (
        <div className="layout">
            <div className="layout-row">
                <button className = "food-btn">
                    <div className = "btn-content">
                        <SoupsIcon/>
                        <p>Soups</p>
                    </div>   
                </button>

                <button className = "food-btn">
                    <div className = "btn-content">
                        <DessertsIcon/>
                        <p>Desserts</p>
                    </div>
                </button>

                <button className = "food-btn">
                    <div className = "btn-content">
                        <FastFoodIcon/>
                        <p>Fast Food</p>
                    </div>
                </button>
            </div>
            
            <div className="layout-row">
                <button className = "food-btn">
                    <div className = "btn-content">
                        <MeatIcon/>
                        <p>Meat</p>
                    </div>
                </button>

                <button className = "food-btn">
                    <div className = "btn-content">
                        <SaladsIcon/>
                        <p>Salads</p>
                    </div>
                </button>

                <button className = "food-btn">
                    <div className = "btn-content">
                        <PastaIcon/>
                        <p>Pasta</p>
                    </div>
                </button>
            </div>
            
        </div>
    );

    
}

export default Layout
