import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import UserIco from "../../../shared/icons/User_ico.svg" 
import CartIco from  "../../../shared/icons/Cart_ico.svg"
import MenuIco from "../../../shared/icons/Menu_ico.svg"
import styles from "./drop_menu.module.css";

const DropDownMenu = forwardRef(({ isOpen, setIsOpen, handleProfileButtonPressed, setIsCartModalOpen}, ref) => {
    function profilePressed(){
        handleProfileButtonPressed();
        setIsOpen(false);
    }
    function cartPressed(){
        setIsCartModalOpen(true);
        setIsOpen(false);
    }

    return (
        <div ref={ref} className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
           
            <ul className={styles['menu-list']}>
                <li className={styles["menu-item"]}><Link to={'/menu'} className={styles['link']}><img src={MenuIco} alt='menu' className={styles['dropdown-ico']}/>Меню</Link></li>
                <li className={styles["menu-item"]} onClick={cartPressed}><img src={CartIco} alt='cart' className={styles['dropdown-ico']}/>Кошик</li>
                <hr />
                <li className={styles["menu-item"]} onClick={profilePressed}><img src={UserIco} alt='profile' className={styles['dropdown-ico']}/>Особистий кабінет</li>
            </ul>
        </div>
    );
});

export default DropDownMenu;
