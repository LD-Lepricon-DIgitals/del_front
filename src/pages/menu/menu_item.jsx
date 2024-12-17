import React from "react";
import styles from './menu_item.module.css'
import ListItem from "../shared/ListItem/ListItem";

function MenuItem(props) {
    return (
        <ListItem>
            <img src={props.img} className={styles["dish-ico"]}/>
            <p>{props.name}</p>
            <div className={styles["container"]}>
                <p>{props.category}</p>
                <p>{props.price}</p>
            </div>
        </ListItem>
    );
}

export default MenuItem;