import React from "react";
import styles from './CartModalContent.module.css';
import PositionModel from "./PositionModel/PositionModel";

const positionNames = ['Картопля фрі','Бургер' ,'Сало' ,'Салат' ,'Ковбаса', 'Живчик', 'Суп'];

function CartModalContent(){
    return(
        <div className={styles.content}>
            <h1 className={styles.header}>Ваше замовлення</h1>
                { positionNames.length === 0 ? <h2 className={styles['empty-cart-text']}>На жаль, замовлення порожнє.</h2> : positionNames.map(element => (
                    <PositionModel positionName={element}/>
                ))}
            
            { positionNames.length > 0 && <button className={styles['order-button']}>Замовити</button>}
        </div>
    );
}

export default CartModalContent;