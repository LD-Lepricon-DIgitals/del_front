import React from "react";
import styles from './order_item.module.css'
import ListItem from "../shared/ListItem/ListItem";
import OrderInfoIcon from "../shared/icons/OrderInfoIcon.svg"

function OrderItem(props) {
    return (
        <ListItem>
            <img src={props.img} className={styles["user-ico"]}/>
            <div className={styles["container"]}>
                <p className={styles["user-name"]}>{props.name}</p>
                <p>{props.address}</p>
                <div className={styles["buttons-container"]}>
                    <a href={`/orders/${props.id}`}><img src={OrderInfoIcon} alt=""/></a>
                    <label className={styles["switch"]}>
                        <input type="checkbox"/>
                        <span className={styles["slider"]}></span>
                    </label>
                </div>
            </div>
        </ListItem>
    );
}

export default OrderItem;