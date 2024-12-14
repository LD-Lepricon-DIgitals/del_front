import React from "react";
import styles from './HomeButton.module.css'
import HomeIco from '../icons/TEMP_Home_ico.svg'

function HomeButton(){
    return(
        <div className={styles['home-button']}>
            <img className="ico" src={HomeIco} alt="home page"/>
        </div>
    );
}

export default HomeButton;