import React, { useEffect, useState ,useContext} from "react";
import styles from "./CartModalContent.module.css";
import PositionModel from "./PositionModel/PositionModel";
import { CartContext } from "../../../../context/CartContext"; 
import { Requests } from '../../../../api/axios_queries/requests.js';
import axiosClient from '../../../../api/axios_queries/axios.js';
function CartModalContent() {
    const api = new Requests(axiosClient)
    const createOrder = async () => {
        const storedCartItems = localStorage.getItem("cartItems");
      
        if (!storedCartItems) {
          console.error("Корзина порожня. Неможливо створити замовлення.");
          alert("Корзина порожня. Неможливо створити замовлення.");
          return;
        }
      
        try {
          const cartItems = JSON.parse(storedCartItems);
      
          // Формуємо тіло запиту
          const requestBody = {
            dishes: cartItems.map((item) => ({
              dish_id: item.dish_id,
              quantity: item.dish_count,
            })),
            order_price: cartItems.reduce(
              (total, item) => total + item.dish_count * item.dish_price,
              0
            ),
          };
      
          // Надсилаємо POST-запит
          const response = await api.createOrder(requestBody);
      
          // Перевіряємо статус відповіді
          if (response.status === 401) {
            alert("Потрібна авторизація. Будь ласка, увійдіть у систему.");
            return;
          }
      
          if (response.status < 200 || response.status >= 300) {
            alert(`Помилка сервера: ${response.status}`);
            console.error(`Помилка сервера: ${response.status}`);
            return;
          }
      
          console.log("Замовлення успішно створено:", response.data);
         clearCart();
          //alert("Замовлення успішно створено!");
        } catch (error) {
          if (error.response) {
            console.error(`
              Помилка створення замовлення: Статус ${error.response.status}. Повідомлення:,
              error.response.data
            `);
            alert(`Помилка: ${error.response.status}. ${error.response.data?.message || "Невідома помилка."}`);
          } else {
            console.error("Невідома помилка при створенні замовлення:", error.message);
            alert("Невідома помилка. Спробуйте пізніше.");
          }
        }
      };

  const { cartItems, updateCart,clearCart } = useContext(CartContext);

  return (
    <div className={styles.content}>
      <h1 className={styles.header}>Ваше замовлення</h1>
      {cartItems.length === 0 ? (
        <h2 className={styles["empty-cart-text"]}>
          На жаль, замовлення порожнє.
        </h2>
      ) : (
        cartItems.map((item, index) => (
          <PositionModel
            key={item.dishId}
            positionName={item.dish_name}
            count={item.dish_count}
            dishId={item.dish_id}
            updateCart={updateCart}
          />
        ))
      )}
      {cartItems.length > 0 && (
        <button className={styles["order-button"]} onClick={createOrder}>Замовити</button>
      )}
    </div>
  );
}



export default CartModalContent;
