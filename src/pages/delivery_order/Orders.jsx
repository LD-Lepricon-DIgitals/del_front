import React, {useEffect, useState} from "react";
import styles from "./Orders.module.css";
import Navigation from "../shared/navigation/navigation";
import OrderItem from "./order_item.jsx";
import {Requests} from "../../api/axios_queries/requests";
import axios from "../../api/axios_queries/axios";

// const orders = [
//     {
//         id: 1,
//         name: "Abdulah",
//         address: "Вулиця Політехнічна, Буд. 15-Б, Кв. 1321",
//         img: Avatar
//     },
//     {
//         id: 2,
//         name: "Maksiiiiimka",
//         address: "Вулиця Пушкіна, Буд. 666, Кв. 52",
//         img: Avatar
//     },
//     {
//         id: 3,
//         name: "Anton",
//         address: "Проспект Ющенка, Буд. 103, Кв. 2",
//         img: Avatar
//     },
//     {
//         id: 4,
//         name: "Nurlan",
//         address: "Бульвар Спеки, Буд. 42, Кв. 392",
//         img: Avatar
//     },
//     {
//         id: 5,
//         name: "Antropolit",
//         address: "Вулиця Героїв, Буд. 1, Кв. 1",
//         img: Avatar
//     },
//     {
//         id: 6,
//         name: "Orlovskiy",
//         address: "Вулиця Митрополита, Будь. 4, Кв. 666",
//         img: Avatar
//     },
//     {
//         id: 7,
//         name: "Stariy_Bog",
//         address: "Бульвар Верхновної Ради, Буд. 1",
//         img: Avatar
//     },
//     {
//         id: 8,
//         name: "Stray228",
//         address: "Вулиця Верховенства Шарпів, Буд. 69, Кв. 58",
//         img: Avatar
//     }
// ];


function Orders() {
    const requests = new Requests(axios);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        requests.getOrders().then((response) => {
            console.log(response.data)
            setOrders(response.data)
        })
    }, []);
    return (
        <div>
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
