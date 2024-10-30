import {React, useState, useEffect} from "react";
import Clear from '../../icons/Clear_ico.svg'
import styles from '../InputStyles.module.css'

function TextInput({placeholder, type, onInputChange, className}) {
    const [isClearButtonOpen, setIsClearButtonOpen] = useState(false);
    const [inputText, setInputText] = useState("");

    useEffect(() => {
        if (inputText.length !== 0){
             setIsClearButtonOpen(true);
        } 
        else{
         setIsClearButtonOpen(false);
        }
     }, [inputText]);

     const handleChange = (e) => {
        const newValue = e.target.value;
        setInputText(newValue);
        onInputChange(newValue); 
     };
    return(
        <div className={`${className} ${styles["input-pannel"]}`}>
            <input type={type} className={`${styles.input}`} value={inputText} placeholder={placeholder} onChange={handleChange} />
            <button type="button" className={isClearButtonOpen ? styles.visible : styles.hidden} onClick={() => {
                setInputText('');
                onInputChange('');
                }}>
            <img className={styles.ico} src={Clear} alt="clear" /></button>
        </div>
    );
}
export default TextInput