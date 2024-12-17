import React from "react";
import styles from './menu_item.module.css'

function MenuItem(props){
    
    return(
        <div className={styles["item"]}>
            <img src={props.img} className={styles["dish-ico"]}/>
                <p>{props.name}</p>
            <div className={styles["container"]}>
                <p>{props.category}</p>
                <p>{props.price}</p>
            </div>
        </div>
    );

}

export default MenuItem;