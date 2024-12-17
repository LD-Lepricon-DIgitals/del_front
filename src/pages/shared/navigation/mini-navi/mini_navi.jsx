import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import CartIco from '../../../shared/icons/Cart_ico.svg'
import UserIco from '../../../shared/icons/User_ico.svg'
import HomeIco from '../../../shared/icons/Home_ico.svg'
import Button from "../../NavigationButton/Button";
import styles from './mini_navi.module.css'

function MiniNavi() {
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleProfileButtonPressed = () => {
        navigate("/profile");
    }

    const handleHomeButtonPressed = () => {
        navigate("/");
    }

    return(
        <>
        <div className={styles["mini-navi"]}>
            <button onClick={handleHomeButtonPressed} className={styles["navi-btn"]}><img className={styles["ico"]} src={HomeIco} alt="home" /></button>            
            <button onClick={() => {setIsCartModalOpen(!isCartModalOpen)}} className={styles["navi-btn"]}><img className={styles["ico"]} src={CartIco} alt="Cart" /></button>
            <button onClick={handleProfileButtonPressed} className={styles["navi-btn"]}><img className={styles["ico"]} src={UserIco} alt="profile" /></button>
        </div>
        </>
        
    );
}

export default MiniNavi;