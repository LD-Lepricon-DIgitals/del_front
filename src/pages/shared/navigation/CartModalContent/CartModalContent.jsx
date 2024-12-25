import React from "react";
import styles from './CartModalContent.module.css';
import PositionModel from "./PositionModel/PositionModel";

const positionNames = ['Картопля фрі','Бургер' ,'Сало' ,'Салат' ,'Ковбаса', 'Живчик', 'Суп'];

function CartModalContent({ cartItems = []}){
    return(
        <div className={styles.content}>
            <h1 className={styles.header}>Ваше замовлення</h1>
                { cartItems.length === 0 ? <h2 className={styles['empty-cart-text']}>На жаль, замовлення порожнє.</h2> : (
                    cartItems.map((item, index) => (
                    <PositionModel
                        key={index}
                        positionName={item.dish_name}
                        price={item.dish_price}
                    />
                    )
                ))}
            
            { cartItems.length > 0 && <button className={styles['order-button']}>Замовити</button>}
        </div>
    );
}

export default CartModalContent;