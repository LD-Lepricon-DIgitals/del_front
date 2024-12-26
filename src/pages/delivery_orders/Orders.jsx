import React, {useEffect, useState} from "react";
import styles from "./Orders.module.css";
import Navigation from "../shared/navigation/navigation";
import OrderItem from "./order_item.jsx";
import {Requests} from "../../api/axios_queries/requests";
import axios from "../../api/axios_queries/axios";

function Orders() {
    const requests = new Requests(axios);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        requests.getOrders().then((response) => {
            setOrders(response.data)
            console.log(response.data)
        })
    }, []);
    return (
        <div className={styles["page-content"]}>
            <Navigation/>
            <div className={styles["container"]}>
                <p className={styles["title"]}>Все неначе собі</p>
                <div className={styles["menu-container"]}>
                    {orders.map((order) => {
                        return <OrderItem id={order.order_id} name={order.login} address={order.address}
                                          key={order.order_id} status={order.status}
                                          img={"data:image/png;base64," + order.user_photo}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Orders;
