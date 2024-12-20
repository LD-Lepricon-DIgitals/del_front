import React from 'react';
import styles from "../../menu/menu_item.module.css";

function ListItem({children}) {
    return(
        <div className={styles["item"]}>
            {children}
        </div>
    );
}

export default ListItem;