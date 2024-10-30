import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import UserIco from "../../../shared/icons/User_ico.svg" 
import CartIco from  "../../../shared/icons/Cart_ico.svg"
import MenuIco from "../../../shared/icons/Menu_ico.svg"
import styles from "./drop_menu.module.css";

const DropDownMenu = forwardRef(({ isOpen }, ref) => {
    return (
        <div ref={ref} className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
           
            <ul className={styles['menu-list']}>
                <li className={styles["menu-item"]}><Link to={'/menu'} className={styles['link']}><img src={MenuIco} alt='menu' className={styles['dropdown-ico']}/>Меню</Link></li>
                <li className={styles["menu-item"]}><Link to={'/cart'} className={styles['link']}><img src={CartIco} alt='cart' className={styles['dropdown-ico']}/>Кошик</Link></li>
                <hr />
                <li className={styles["menu-item"]}><Link to={'/profile'} className={styles['link']}><img src={UserIco} alt='profile' className={styles['dropdown-ico']}/>Особистий кабінет</Link></li>
            </ul>
        </div>
    );
});

export default DropDownMenu;
