import React from 'react';
import styles from './dish_item.module.css'

function DishItem(props) {
    return (
        <div className={styles["dish"]}>
            <img src={"data:image/png;base64," + props.dish_photo} alt="dish_img"/>
            <p className={styles["dish-name"]}>{props.dish_name}</p>
            <p className={styles["dish-quantity"]}>x {props.quantity}</p>
        </div>
    );
}

export default DishItem;