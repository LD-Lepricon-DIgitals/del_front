import React, { useState, useEffect } from "react";
import styles from './order_item.module.css';
import ListItem from "../shared/ListItem/ListItem";
import OrderInfoIcon from "../shared/icons/OrderInfoIcon.svg";
import { Requests } from "../../api/axios_queries/requests";
import axios from "../../api/axios_queries/axios";

function OrderItem(props) {
    const requests = new Requests(axios);
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(props.status === "in_process");
    }, [props.status]);

    const handleCheckboxChange = (event) => {
        const newChecked = event.target.checked;
        setIsChecked(newChecked);
        if (newChecked) {
            requests.confirmOrder(props.id)
                .then(() => {
                    console.log("Order confirmed successfully.");
                })
                .catch((error) => {
                    console.error("Error confirming order:", error);
                    setIsChecked(false);
                });
        }
    };

    return (
        <ListItem>
            <img src={props.img} className={styles["user-ico"]} alt="User Icon" />
            <div className={styles["container"]}>
                <p className={styles["user-name"]}>{props.name}</p>
                <p>{props.address}</p>
                <div className={styles["buttons-container"]}>
                    <a href={`/orders/${props.id}`}>
                        <img className={styles["redirect-button"]} src={OrderInfoIcon} alt="Order Info" />
                    </a>
                    <label className={styles["switch"]}>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            disabled={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <span className={styles["slider"]}></span>
                    </label>
                </div>
            </div>
        </ListItem>
    );
}

export default OrderItem;