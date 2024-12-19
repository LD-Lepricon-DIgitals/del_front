import React from "react";
import styles from "./Orders.module.css";
import MiniNavi from "../shared/navigation/mini-navi/mini_navi.jsx";
import OrderItem from "./order_item.jsx";
import Avatar from "../shared/icons/Avatar_ico.svg";

const orders = [
    {
        id: 1,
        name: "Abdulah",
        address: "Вулиця Політехнічна, Буд. 15-Б, Кв. 1321",
        img: Avatar
    },
    {
        id: 2,
        name: "Maksiiiiimka",
        address: "Вулиця Пушкіна, Буд. 666, Кв. 52",
        img: Avatar
    },
    {
        id: 3,
        name: "Anton",
        address: "Проспект Ющенка, Буд. 103, Кв. 2",
        img: Avatar
    },
    {
        id: 4,
        name: "Nurlan",
        address: "Бульвар Спеки, Буд. 42, Кв. 392",
        img: Avatar
    },
    {
        id: 5,
        name: "Antropolit",
        address: "Вулиця Героїв, Буд. 1, Кв. 1",
        img: Avatar
    },
    {
        id: 6,
        name: "Orlovskiy",
        address: "Вулиця Митрополита, Будь. 4, Кв. 666",
        img: Avatar
    },
    {
        id: 7,
        name: "Stariy_Bog",
        address: "Бульвар Верхновної Ради, Буд. 1",
        img: Avatar
    },
    {
        id: 8,
        name: "Stray228",
        address: "Вулиця Верховенства Шарпів, Буд. 69, Кв. 58",
        img: Avatar
    }
];


function Orders() {
    return (
        <div>
            <div className={styles["navi-container"]}>
                <p className={styles["title"]}>Все неначе собі</p>
                <MiniNavi/>
            </div>
            <div className={styles["container"]}>
                <div className={styles["menu-container"]}>
                    {orders.map((order) => {
                        return <OrderItem id={order.id} name={order.name} address={order.address} key={order.id} img={order.img}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Orders;
