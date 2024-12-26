import React from "react";
import styles from './Footer.module.css';
import Tree from '../img/ChristmasTree.svg'
import GitHub from '../icons/GitHub_ico.svg'
import Gmail from '../icons/Gmail_ico.svg'
import Telega from '../icons/Telega_ico.svg'
import Discord from '../icons/Discord_ico.svg'

function Footer(){
    return(
        <footer className="footer">
            <div className={styles.content}>
                <ul className={styles.list}>
                    <a href="https://github.com/LD-Lepricon-DIgitals"><li style={{listStyleImage: `url(${GitHub})` }}> GitHub</li></a>
                    <li style={{ listStyleImage: `url(${Gmail})` }}>delivery.serv@gmail.com</li>
                    <a href="https://t.me/Mnfrr"><li style={{ listStyleImage: `url(${Telega})` }}>Telegram</li></a>
                    <a href="https://discord.com/"> <li style={{ listStyleImage: `url(${Discord})` }}>Discord</li></a>
                </ul>
                <div>
                    <h3>Розробники:</h3>
                    <ul className={styles.devs}>
                        <a href="https://github.com/danskaasya"><li>danskaasya</li></a>
                        <a href="https://github.com/dariikhom"><li>dariikhom</li></a>
                        <a href="https://github.com/DrLivsey00"><li>DrLivsey00</li></a>
                        <a href="https://github.com/FUZIR"><li>FUZIR</li></a>
                        <a href="https://github.com/Hang-Petrov"><li>Hang-Petrov</li></a>
                        <a href="https://github.com/rybmks"><li>Mr. Trempel</li></a>
                    </ul>
                </div>
                <img className={styles.Tree} src={Tree} alt="Ялинка"/>
            </div>
        </footer>
    );
}

export default Footer;