import React, { useState } from "react";
import styles from './menu_item.module.css'
import ListItem from "../shared/ListItem/ListItem";

function MenuItem(props) {
    const [ isDisabled, setIsDisabled ] = useState(false);

    const handleAddToCart = () => {
        setIsDisabled(!isDisabled);
        
    }
    return (
        /* <div className={isDisabled ? styles['hidden']: styles['item']}> */
                <ListItem>
                    <div className={styles["name-container"]}>
                        <img src={props.img} className={styles["dish-ico"]}/>
                        <p>{props.name}</p>
                    </div>
                    
                    <div className={styles["container"]}>
                        <p className={styles["category"]}>{props.category}</p>
                        <button className={styles["price"]} onClick={() => setIsDisabled(!isDisabled)}>{props.price}</button>
                    </div>
                </ListItem>
        /* </div> */
        
        
    );
}

export default MenuItem;