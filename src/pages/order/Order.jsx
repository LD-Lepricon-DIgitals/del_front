import React, {useEffect, useState} from 'react';
import Navbar from "../shared/navigation/navigation";
import {useParams} from "react-router-dom";
import {Requests} from "../../api/axios_queries/requests";
import axios from "../../api/axios_queries/axios";
import styles from "./Order.module.css";

function Order() {
    const requests = new Requests(axios)
    const {id} = useParams()
    const orderId = parseInt(id)
    const [orderDetails, setOrderDetails] = useState()
    useEffect(() => {
        requests.getOrderDetailsById(orderId).then((details) => {
            setOrderDetails(details.data)
            console.log(details.data)
        })
    }, []);
    return (
        <div className="wrapper">
            <Navbar/>
            <div className={styles["page-content"]}>
                <div className={styles["order"]}>
                    <div className={styles["title-status"]}>
                        <p className={styles["data-title"]}>
                            Інформація про замовлення
                        </p>
                        <div className={styles["data-status"]}>
                            Активне
                        </div>
                    </div>
                    <div className={styles["info"]}>
                        <div className={styles["client-info"]}>
                            <div className={styles["first-section"]}>
                                <div className={styles["avatar"]}>
                                    <img
                                        src={"data:image/png;base64," + orderDetails?.user_photo_url}
                                        alt="Avatar"
                                        className={styles["avatar-img"]}
                                    />
                                </div>
                                <div className={styles["client-fields"]}>
                                    <div className={styles["user-info-field"]}>
                                        {orderDetails?.username}
                                    </div>
                                    <div className={styles["user-info-field"]}>
                                        {orderDetails?.user_surname}
                                    </div>
                                    <div className={styles["user-info-field"]}>
                                        {orderDetails?.user_login}
                                    </div>
                                </div>
                            </div>
                            <div className={styles["second-section"]}>
                                <div className={styles["user-info-field"]}>
                                    Address
                                </div>
                                <p className={styles["order-description"]}>
                                    Клієнт вже погодився що, у випадку, де клієнт не забрав своє замовлення чи не
                                    оплатив його,
                                    кур’єр має право схавати все що він віз Приємного апетиту ;)
                                </p>
                            </div>
                        </div>
                        <div className={styles["order-info"]}>
                            asdasd
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;