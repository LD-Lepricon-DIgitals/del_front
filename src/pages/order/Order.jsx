import React, {useEffect, useState} from 'react';
import Navbar from "../shared/navigation/navigation";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Requests} from "../../api/axios_queries/requests";
import axios from "../../api/axios_queries/axios";
import styles from "./Order.module.css";
import DishItem from "./dish_item";
import HomeButton from "../shared/HomeButton/HomeButton";

const status = {
    "in_process": "Виконується",
    "pending": "Активне"
}

function Order() {
    const requests = new Requests(axios)
    const {id} = useParams()
    const orderId = parseInt(id)
    const [orderDetails, setOrderDetails] = useState()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)

    const handleFinishOrder = async () => {
        await requests.finishOrder(orderId)
        navigate("/orders")
    }
    useEffect(() => {
        requests.getOrderDetailsById(orderId).then((details) => {
            setOrderDetails(details.data)
            setLoading(false)
            console.log(details.data)
        })
    }, []);
    return (
        <div className="wrapper">
            <Navbar/>
            {loading ? (
                <p className={styles["message"]}>Завантаження...</p>
            ) : orderDetails === null ? (
                <p className={styles["message"]}>Нічого не знайдено</p>
            ) : (
                <div className={styles["page-content"]}>
                    <div className={styles["order"]}>
                        <div className={styles["title-status"]}>
                            <p className={styles["data-title"]}>
                                Інформація про замовлення
                            </p>
                            <div className={styles[`data-status_${orderDetails?.order_status}`]}>
                                {status[orderDetails?.order_status]}
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
                                    {orderDetails?.address && (
                                        <div className={styles["user-info-field"]}>
                                            Address
                                        </div>
                                    )}
                                    <p className={styles["order-description"]}>
                                        Клієнт вже погодився що, у випадку, де клієнт не забрав своє замовлення чи не
                                        оплатив його,
                                        кур’єр має право схавати все що він віз Приємного апетиту ;)
                                    </p>
                                </div>
                            </div>
                            <div className={styles["order-info"]}>
                                <p className={styles["order-title"]}>
                                    Замовлення
                                </p>
                                <div className={styles["orders"]}>
                                    {orderDetails?.dishes.map((dish) => <DishItem key={dish.id}
                                                                                  dish_photo={dish.dish_photo}
                                                                                  dish_name={dish.dish_name}
                                                                                  quantity={dish.quantity}/>)}
                                    <p>
                                        <span className={styles["totalprice-title"]}>До сплати: </span>
                                        <span
                                            className={styles["totalprice-amount"]}>{orderDetails?.order_price}$</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {orderDetails?.order_status === "in_process" && (
                            <div className={styles["button-wrapper"]}>
                                <button onClick={handleFinishOrder} className={styles["finish-button"]}>Помітити як
                                    виконанене
                                </button>
                            </div>
                        )}
                    </div>
                </div>)}
            <Link to="/"><HomeButton/></Link>
        </div>
    );
}

export default Order;