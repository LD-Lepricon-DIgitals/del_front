import React from "react";
import styles from './menu_item.module.css'
import ListItem from "../shared/ListItem/ListItem";

function MenuItem(props) {
    return (
        <ListItem>
            <img src={props.img} className={styles["dish-ico"]}/>
            <p>{props.name}</p>
            <div className={styles["container"]}>
                <p className={styles["category"]}>{props.category}</p>
                <button className={styles["price"]}>{props.price}</button>
            </div>
        </ListItem>
    );
}

export default MenuItem;