import "./navigation.css"
import useClickOutside from "../../../hooks/useClickOutside.js";
import useWindowWidth from "../../../hooks/useWindowWidth.js";
import {React, useState, useRef, useEffect } from "react";
import Button from "../NavigationButton/Button.jsx";
import DropDownMenu from "../../main/components/DropDownMenu/drop_menu.jsx";
import { Link } from "react-router-dom";
import UserIco from  "../icons/User_ico.svg"
import CartIco from  "../icons/Cart_ico.svg"
import SearchIco from  "../icons/Search_ico.svg"
import ListIco from  "../icons/TEMP_List_ico.svg"
import Clear from "../icons/Clear_ico.svg"

function Navigation(){
    const [isDropOpen, setIsDropOpen] = useState(false);
    const [isClearButtonOpen, setIsClearButtonOpen] = useState(false);
    const [inputText, setInputText] = useState("");

    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);

    useClickOutside([menuRef, menuButtonRef], isDropOpen, () => setIsDropOpen(false));
    const windowWidth = useWindowWidth();
    
    useEffect(() => {
       if (inputText.length !== 0){
            setIsClearButtonOpen(true);
       } 
       else{
        setIsClearButtonOpen(false);
       }
    }, [inputText]);

    const checkWindowWider = (width) => {
        if (windowWidth <= width){
            return true;
        } 
        else {
            setIsDropOpen(false);
            return false;
        }
    }
    const toggleMenu = () => {
            setIsDropOpen(!isDropOpen);
    } 

    return(
        <div className="navi">
            <div className="navigation-content">
                    <div className="search-pannel">
                        <Button><img className="ico" src={SearchIco} alt="Search" /></Button>
                        <input type="text" className="search-input navi-font" value={inputText} placeholder={"Пошук..."} onChange={e => setInputText(e.target.value)} />
                        <Button className={isClearButtonOpen ? 'visible' : 'hidden'} onClick={() => {setInputText('')}}><img className="clear" src={Clear} alt="clear" /></Button>
                    </div>
                    <div className="menu-buttons">
                    <Link to={"/menu"} className="link"><Button className="menu-button "><p className="navi-font">Меню</p></Button></Link>
                    <Link to="/cart"><Button ><img className="ico" src={CartIco} alt="Cart" /></Button></Link>
                    <Link to="/profile"><Button><img className="ico" src={UserIco} alt="profile" /></Button></Link>
                    </div>
                    <Button ref={menuButtonRef} onClick={toggleMenu} className="list-for-mobile-button"><img className="ico" src={ListIco} alt="List"></img></Button>
            </div>
            <DropDownMenu ref={menuRef} isOpen={isDropOpen && checkWindowWider(550)}></DropDownMenu>
        </div>
    );
}

export default Navigation