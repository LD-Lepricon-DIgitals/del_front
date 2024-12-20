import React, { useState } from "react";
import styles from "./menu_item.module.css";
import ListItem from "../shared/ListItem/ListItem";

function MenuItem({ name, category, price, img, addToCart }) {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleAddToCart = () => {
    const item = { name, category, price, img };
    addToCart(item);
    console.log(item);
  };
  return (
    <ListItem>
      <div className={styles["name-container"]}>
        <img src={img} className={styles["dish-ico"]} />
        <p>{name}</p>
      </div>

      <div className={styles["container"]}>
        <p className={styles["category"]}>{category}</p>
        <button className={styles["price"]} onClick={handleAddToCart}>
          {price}
        </button>
      </div>
    </ListItem>
  );
}

export default MenuItem;
