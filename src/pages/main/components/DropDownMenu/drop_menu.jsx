import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import UserIco from "../../../shared/icons/User_ico.svg" 
import CartIco from  "../../../shared/icons/Cart_ico.svg"
import MenuIco from "../../../shared/icons/Menu_ico.svg"
import "./drop_menu.css";

const DropDownMenu = forwardRef(({ isOpen }, ref) => {
    return (
        <div ref={ref} className={`menu ${isOpen ? "open" : ""}`}>
           
            <ul className='menu-list'>
                <li className='menu-item'><Link to={'/menu'} className='link'><img src={MenuIco} alt='menu' className='dropdown-ico'/>Меню</Link></li>
                <li className='menu-item'><Link to={'/cart'} className='link'><img src={CartIco} alt='cart' className='dropdown-ico'/>Кошик</Link></li>
                <hr />
                <li className='menu-item'><Link to={'/profile'} className='link'><img src={UserIco} alt='profile' className='dropdown-ico'/>Особистий кабінет</Link></li>
            </ul>
        </div>
    );
});

export default DropDownMenu;
