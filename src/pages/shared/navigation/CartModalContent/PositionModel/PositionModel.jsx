import React, { useState } from "react";
import styles from "./PositionModel.module.css";

function PositionModel({ positionName }) {
  const [isRedChecked, setIsRedChecked] = useState(true);

  return (
    <div className={`${styles.content} ${isRedChecked ? styles['green-border'] : styles['red-border']}`}>
        <div className={styles["text-block"]}>
            <p className={styles.text}>{positionName}</p>
        </div>
        <div className={styles["checkbox-block"]}>
            <label className={styles["checkbox-container"]}>
                <input
                    type="checkbox"
                    className={styles["checkbox-input"]}
                    checked={isRedChecked}
                    onChange={() => setIsRedChecked(!isRedChecked)}/>

           <span className={`${styles["checkbox-custom"]} ${styles["checkbox-red"]}`}></span>
         </label>
        </div>
    </div>
  );
}

export default PositionModel;
