import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RegisterForm.module.css';
import TextInput from '../../Inputs/TextInput/TextInput.jsx';
import PasswordInput from '../../Inputs/PasswordInput/PasswordInput.jsx';
import useForm from '../../../../hooks/useForm.js';
import {ValidateLoginInput, ValidateRegisterInput} from './ValidateInputs.js'
import { Requests } from '../../../../api/axios_queries/requests.js';
import axiosClient from '../../../../api/axios_queries/axios.js';

function RegistrationForm({toggleModalOpen}) {
    const [isRegistering, setIsRegistering] = useState(true);
    const [validationError, setValidationError] = useState(null);
    const requests = new Requests(axiosClient);
    const navigate = useNavigate();

    const initialValues = {
        login: '',
        surname: '',
        name: '',
        address: '',
        phone_number: '',
        password: '',
        submit_password: '',
        personal_data_allow: false
    };

    const { formValues, handleInputChange, setFormValues } = useForm(initialValues);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const trimmedValues = { ...formValues };

        for (let key in trimmedValues) {
            if (typeof trimmedValues[key] === 'string') {
                trimmedValues[key] = trimmedValues[key].trim();
            }
        }
        
        setFormValues(trimmedValues);
        let validate_res;
        
        if (isRegistering){
            validate_res = ValidateRegisterInput(trimmedValues);
        }
        else {
            validate_res = ValidateLoginInput(trimmedValues);
        }

        if (!validate_res['success']){
            setValidationError(validate_res['message']);
            return;
        }

        setValidationError(null);

        let respose;

        if (isRegistering){
            const regData = {
                user_login: trimmedValues.login,
                user_name: trimmedValues.name,
                user_surname: trimmedValues.surname,
                user_address: trimmedValues.address,
                user_phone : trimmedValues.phone_number,
                user_password: trimmedValues.password
            }
            console.log(regData);
            
            try {
                respose = await requests.Registration(regData);
            }
            catch (err){
                if (err.response?.status === 409) {
                    alert("Користувач вже існує!");
                }
                
                return;
            }
        }
        else {
            const logData = {
                user_login: trimmedValues.login,
                user_password: trimmedValues.password
            }
            console.log(logData);
            try {
                respose = await requests.Login(logData);
            }
            catch (err){
                if (err.response?.status === 404) {
                    alert("Користувача не знайдено! Перевірте логін та пароль!.");
                }

                return;
            }
        }
       
        console.log(respose);
        if (respose.status === 200 ){
            navigate('/profile');
            toggleModalOpen();
        }

        setFormValues(initialValues);
    };

    const renderFormFields = () => (
        <>
            {isRegistering && (
                <>
                    <TextInput value={formValues.surname} onInputChange={(value) => handleInputChange('surname', value)} placeholder='Прізвище' className={styles.input} id='surname'/>
                    <TextInput value={formValues.name} onInputChange={(value) => handleInputChange('name', value)} placeholder="Ім'я" className={styles.input} id='name' />
                    <TextInput value={formValues.address} onInputChange={(value) => handleInputChange('address', value)} placeholder="Адреса" className={styles.input} id='address' />
                <TextInput value={formValues.phone_number} onInputChange={(value) => handleInputChange('phone_number', value)} placeholder="Номер телефону" className={styles.input} id='phone_number' />
                
                </>
            )}
            <TextInput value={formValues.login} onInputChange={(value) => handleInputChange('login', value)} placeholder="Логін" className={styles.input} id='login' />
            <PasswordInput value={formValues.password} onInputChange={(value) => handleInputChange('password', value)} placeholder="Пароль" className={styles.input} id='password'/>
            {isRegistering && <PasswordInput value={formValues.submit_password} onInputChange={(value) => handleInputChange('submit_password', value)} placeholder="Підтвердити пароль" className={styles.input} id='submit_password'/>}
        </>
    );

    return (
        <div className={styles.content}>
            <h1>{isRegistering ? 'Реєстрація' : 'Увійти'}</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles["text-inputs"]}>
                    {renderFormFields()}
                </div>
                {isRegistering && (
                    <div className={styles['checkbox-pannel']}>
                        <label className={styles['checkbox-container']}>
                            <input onChange={(event) => handleInputChange('personal_data_allow', event.target.checked)} className={styles.checkbox} type="checkbox"/>
                            <span className={styles.checkmark}></span>
                        </label>
                        <h4>Погоджуюсь на обробку персональних даних</h4>
                    </div>
                )}
                <button type='submit' className={styles.submit}>{isRegistering ? 'Зареєструватись' : 'Увійти'}</button>
                <div className={styles["log-in"]}>
                    <h3>{isRegistering ? 'Вже маєш акаунт?' : 'Не маєш акаунту?'}</h3>
                    <button type='button' className={styles['log-button']} 
                        onClick={() => {
                            setIsRegistering(!isRegistering);
                            setValidationError(null)}}>
                        {isRegistering ? 'Увійти' : 'Створити'}
                    </button>
                </div>
            </form>
            {(validationError !== null) && (
                <p className={styles['validaton-error']}>{validationError}</p>
            )}
        </div>
    );
}

export default RegistrationForm;
