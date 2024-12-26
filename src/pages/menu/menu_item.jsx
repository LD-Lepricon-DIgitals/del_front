import React from "react";
import styles from "./menu_item.module.css";
import ListItem from "../shared/ListItem/ListItem";

function MenuItem({dish_name, dish_category, dish_price, dish_photo, addToCart,}) {

    const handleAddToCart = () => {
        const item = {dish_name, dish_category, dish_price, dish_photo};
        addToCart(item);
        console.log(item);
    };

    return (
        <ListItem>
            <div className={styles["name-container"]}>
                <img src={dish_photo} className={styles["dish-ico"]}/>
                <p className={styles['name']}>{dish_name}</p>
            </div>
            <div className={styles["container"]}>
                <p className={styles["category"]}>{dish_category}</p>
                <button className={styles["price"]} onClick={handleAddToCart}>
                    {dish_price}$
                </button>
            </div>
        </ListItem>
    );
}

export default MenuItem;
