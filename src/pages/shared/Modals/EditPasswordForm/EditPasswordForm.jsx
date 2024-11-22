import { useState } from 'react';
import styles from "./EditPasswordForm.module.css";
import { setTestUser, getTestUser } from "../../../profile/TestUser.js"
import ValidatePasswordEdit from './ValidatePassword.js'
import Save_ico from "../../icons/Save_ico.svg"
import Hide_ico from "../../icons/Hide_ico.svg"
import Show_ico from "../../icons/Show_ico.svg"


function EditPassword({ onClose }) {
    const user = getTestUser();
    const [formValue, setFormValue] = useState(user);
    const [validationError, setValidationError] = useState(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);

    

    const handleInputChange = (field, value) => {
        setFormValue({ ...formValue, [field]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        

        let validate_res = ValidatePasswordEdit(formValue);
        if (!validate_res['success']) {
            setValidationError(validate_res['message']);
            return;
        } 
        const updatedData = {
            ...formValue,
            password: formValue.new_password, 
            new_password: ''
        };

        setTestUser(updatedData);
        console.log(getTestUser())
        onClose();

        setValidationError(null);
        
        


    };

    const togglePasswordHiding = (e) => {
        e.preventDefault();
        setIsPasswordVisible(!isPasswordVisible);
    }

    const toggleNewPasswordHiding = (e) => {
        e.preventDefault();
        setIsNewPasswordVisible(!isNewPasswordVisible);
    }

    const PasswordInputType = (prop)=> {
        if(prop){
            return 'text';
        }
        return 'password';
    }


    return (
        <div className={styles['edit-password-container']}>
            <h1 className={styles['title']}>Зміна пароля</h1>
            <form className={styles['form']}>
                <div className={styles['field']}>
                    <input
                        className={styles['input-field']}
                        placeholder='Введіть старий пароль...'
                        type={PasswordInputType(isPasswordVisible)}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                    />
                    {isPasswordVisible ? 
                    (
                    <button onClick={togglePasswordHiding} className={styles['hide-btn']}>
                        <img src={Hide_ico} alt="hide icon" className={styles['hide-ico']}/>
                    </button>
                    ) : 
                    (
                    <button onClick={togglePasswordHiding} className={styles['hide-btn']}>
                        <img src={Show_ico} alt="show icon" className={styles['hide-ico']}/>
                    </button>
                    )}
                </div>
                <div className={styles['field']}>
                    <input
                        className={styles['input-field']}
                        placeholder='Введіть новий пароль...'
                        type={PasswordInputType(isNewPasswordVisible)}
                        onChange={(e) => handleInputChange('new_password', e.target.value)}
                    />
                    {isNewPasswordVisible ? 
                    (
                    <button onClick={toggleNewPasswordHiding} className={styles['hide-btn']}>
                        <img src={Hide_ico} alt="hide icon" className={styles['hide-ico']}/>
                    </button>
                    ) : 
                    (
                    <button onClick={toggleNewPasswordHiding} className={styles['hide-btn']}>
                        <img src={Show_ico} alt="show icon" className={styles['hide-ico']}/>
                    </button>
                    )}
                </div>

                <button class={styles['edit-btn']} onClick={(e) => handleSubmit(e)}>
                    <img src={Save_ico} alt='save icon' className={styles['save-icon']}/>
                    Зберегти зміни
                </button>
                {(validationError !== null) && (
                    <p className={styles['validaton-error']}>{validationError}</p>
                )}
            </form>
            
        </div>
    );
}

export default EditPassword;