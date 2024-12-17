import React from "react";
import styles from './menu_item.module.css'

function MenuItem(props){
    
    return(
        <div className={styles["item"]}>
            <div className={styles["name-container"]}>
                <img src={props.img} className={styles["dish-ico"]}/>
                <p className={styles["name"]}>{props.name}</p>
            </div>
            
            <div className={styles["container"]}>
                <p className={styles["category"]}>{props.category}</p>
                <button className={styles["price"]}>{props.price}</button>
            </div>
        </div>
    );

}

export default MenuItem;