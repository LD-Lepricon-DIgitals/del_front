import React from "react";
import styles from "./PositionModel.module.css";

function PositionModel({ positionName, count, dishId, updateCart }) {
  const incrementCount = () => {
    const newCount = count + 1;
    updateCart(dishId, newCount);
  };

  const decrementCount = () => {
    if (count > 0) {
      const newCount = count - 1;
      updateCart(dishId, newCount);
    }
  };

  return (
    <div
      className={`${styles.content} ${
        count > 0 ? styles["green-border"] : styles["red-border"]
      }`}
    >
      <div className={styles["text-block"]}>
        <p className={styles.text}>{positionName}</p>
      </div>
      <div className={styles["button-block"]}>
        <button
          className={`${styles.button} ${styles["decrement-button"]}`}
          onClick={decrementCount}
        >
          -
        </button>
        <span className={styles["item-count"]}>{count}</span>
        <button
          className={`${styles.button} ${styles["increment-button"]}`}
          onClick={incrementCount}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default PositionModel;