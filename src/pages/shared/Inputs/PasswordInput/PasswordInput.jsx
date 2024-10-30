import {React, useState, useEffect} from 'react'
import See from '../../icons/See_ico.svg'
import styles from '../InputStyles.module.css'

function PasswordInput({ placeholder, onInputChange, className }){
    const [isSeeButtonOpen, setIsSeeButtonOpen] = useState(false);
    const [isPasswordDisplayed, setIsPasswordDisplayed] = useState(false);
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        if (inputText.length !== 0){
             setIsSeeButtonOpen(true);
        } 
        else{
         setIsSeeButtonOpen(false);
        }
     }, [inputText]);
     const handleChange = (e) => {
        const newValue = e.target.value;
        setInputText(newValue);
        onInputChange(newValue); 
     };

    return (
        <div className={`${className} ${styles["input-pannel"]}`}>
            <input type={isPasswordDisplayed ? 'text' : 'password'} placeholder={placeholder} className={styles.input} value={inputText} onChange={handleChange} />
            <button type="button" className={isSeeButtonOpen ? styles.visible : styles.hidden} onClick={() => {setIsPasswordDisplayed(!isPasswordDisplayed)}}><img src={See} alt="See" /></button>
        </div>
    );
}

export default PasswordInput;