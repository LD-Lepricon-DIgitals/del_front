// Стили
import "./navigation.css";

// Хуки
import useClickOutside from "../../../hooks/useClickOutside.js";
import useWindowWidth from "../../../hooks/useWindowWidth.js";

// React и хуки
import { React, useState, useRef, useEffect, useContext } from "react";

// Компоненты
import Button from "../NavigationButton/Button.jsx";
import DropDownMenu from "./DropDownMenu/drop_menu.jsx";
import RegistrationForm from "./RegisterForm/RegisterFormContent.jsx"
import Modal from "../Modals/Modal.jsx";
import CartModalContent from './CartModalContent/CartModalContent.jsx';

// Иконки
import UserIco from "../icons/User_ico.svg";
import CartIco from "../icons/Cart_ico.svg";
import SearchIco from "../icons/Search_ico.svg";
import ListIco from "../icons/TEMP_List_ico.svg";
import Clear from "../icons/Clear_ico.svg";

// API и контексты
import { Requests } from "../../../api/axios_queries/requests.js";
import axiosClient from "../../../api/axios_queries/axios.js";
import { AppContext } from "../../../context/AppContext.jsx";

// Роутинг
import { Link, useNavigate } from "react-router-dom";


function Navigation(){
    const [isDropOpen, setIsDropOpen] = useState(false);
    const [isClearButtonOpen, setIsClearButtonOpen] = useState(false);
    const [inputText, setInputText] = useState("");
  
    const [isRegModalOpen, setIsRegModalOpen] = useState(false);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);

    const { setUserInfo, isUserAuthorized, setIsUserAuthorized} = useContext(AppContext);
    const navigate = useNavigate();


    const registerModalRef = useRef(null);
    const cartModalRef = useRef(null);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);

    useClickOutside([menuRef, menuButtonRef], isDropOpen, () => setIsDropOpen(false));
    const windowWidth = useWindowWidth();

    useEffect(() => {
        const requests = new Requests(axiosClient);
        const getUserInfo = async () => {
            let res
            try {
                res = await requests.getUserInfo();
                setUserInfo(res.data);
                setIsUserAuthorized(true);

            } catch (error) {
                if (error.response?.status === 401) {
                    setIsUserAuthorized(false);
                    setUserInfo(null);
                }
            }
        }
            getUserInfo();
    }, [setIsUserAuthorized, setUserInfo ]);

    // СЛУЖЕБНЫЙ (нужен для вывода юзер даты сразу после того, как она изменилась, потом убрать)
    // useEffect(() => {
    //     console.log(`USER DATA IS ${JSON.stringify(userInfo)}`);
    // }, [userInfo]); // Этот useEffect сработает, когда userInfo изменится

    useEffect(() => {
       if (inputText.length !== 0){
            setIsClearButtonOpen(true);
       }
       else{
        setIsClearButtonOpen(false);
       }
    }, [inputText]);

    const checkWindowWider = (width) => windowWidth <= width;

    const toggleMenu = () => {setIsDropOpen(!isDropOpen);}

   function handleProfileButtonPressed() {
        if (!isUserAuthorized){
            setIsRegModalOpen(!isRegModalOpen);
        }
        else {
            navigate('/profile');
        }
   }
   useClickOutside([registerModalRef], isRegModalOpen, () => 
    {
        setIsRegModalOpen(false)
    });
    useClickOutside([cartModalRef], isCartModalOpen, () => 
    {
        setIsCartModalOpen(false)
    });

    return(
        <div className="navi">
                        <div className="navigation-content">
                    <div className="search-pannel">
                        <Button><img className="ico" src={SearchIco} alt="Search" /></Button>
                        <input type="text" className="search-input navi-font" value={inputText} placeholder={"Пошук..."} onChange={e => setInputText(e.target.value)} id='navbar-input'/>
                        <Button className={isClearButtonOpen ? 'visible' : 'hidden'} onClick={() => {setInputText('')}}><img className="clear" src={Clear} alt="clear" /></Button>
                    </div>
                    <div className="menu-buttons">
                    <Link to={"/menu"} className="link"><Button className="menu-button "><p className="navi-font">Меню</p></Button></Link>
                    <Button onClick={() => {setIsCartModalOpen(!isCartModalOpen)}}><img className="ico" src={CartIco} alt="Cart" /></Button>
                    <Button onClick={handleProfileButtonPressed}><img className="ico" src={UserIco} alt="profile" /></Button>
                    </div>
                    <Button ref={menuButtonRef} onClick={toggleMenu} className="list-for-mobile-button"><img className="ico" src={ListIco} alt="List"></img></Button>
            </div>
            <DropDownMenu ref={menuRef} isOpen={isDropOpen && checkWindowWider(550)}></DropDownMenu>
            <Modal ref={registerModalRef} isOpen={isRegModalOpen}><RegistrationForm /></Modal>
            <Modal ref={cartModalRef} isOpen={isCartModalOpen}><CartModalContent/></Modal>
        </div>
    );
}

export default Navigation