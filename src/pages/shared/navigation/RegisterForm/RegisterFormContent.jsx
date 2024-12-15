import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RegisterForm.module.css';
import TextInput from '../../Inputs/TextInput/TextInput.jsx';
import PasswordInput from '../../Inputs/PasswordInput/PasswordInput.jsx';
import useForm from '../../../../hooks/useForm.js';
import {ValidateLoginInput, ValidateRegisterInput} from './ValidateInputs.js'
import { Requests } from '../../../../api/axios_queries/requests.js';
import axiosClient from '../../../../api/axios_queries/axios.js';
import { AppContext } from '../../../../context/AppContext.jsx'; 
function RegistrationForm() {
    const [isRegistering, setIsRegistering] = useState(true);
    const [validationError, setValidationError] = useState(null);
    const navigate = useNavigate();
    const { setUserInfo, setIsUserAuthorized} = useContext(AppContext);
    const requests = new Requests(axiosClient);

    const initialValues = {
        login: '',
        surname: '',
        name: '',
        address: '',
        phone_number: '',
        password: '',
        submit_password: '',
        personal_data_allow: false,
        is_courier: false
    };

    const { formValues, handleInputChange, setFormValues } = useForm(initialValues);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Trim all values to avoid errors
        const trimmedValues = Object.fromEntries(
            Object.entries(formValues).map(([key, value]) => 
                [key, typeof value === 'string' ? value.trim() : value]
            )
        );
    
        setFormValues(trimmedValues);
    
        // validation
        const validateRes = isRegistering
            ? ValidateRegisterInput(trimmedValues)
            : ValidateLoginInput(trimmedValues);
    
        if (!validateRes.success) {
            setValidationError(validateRes.message);
            return;
        }
    
        setValidationError(null);
    
        // Formating to API queries format
        const data = isRegistering
            ? {
                user_login: trimmedValues.login,
                user_name: trimmedValues.name,
                user_surname: trimmedValues.surname,
                user_address: trimmedValues.address,
                user_phone: trimmedValues.phone_number,
                user_password: trimmedValues.password,
                user_role: trimmedValues.is_courier ? 'worker' : 'user'
            }
            : {
                user_login: trimmedValues.login,
                user_password: trimmedValues.password,
            };
    
        try {
            console.log(data);
            const response = isRegistering
                ? await requests.registration(data)
                : await requests.login(data);
            
        
            console.log(`RES: ${response.status}`);
            
            if (response.status === 200) {
                const userInfo = await requests.getUserInfo();
                setIsUserAuthorized(true);
                setUserInfo(userInfo.data);
                navigate('/profile');
                setFormValues(initialValues);

            }
        } catch (err) {
            handleApiError(err);
            return;
        }
    };
    
    const handleApiError = (err) => {
        console.log(err);
                if (isRegistering && err.response?.status === 409) {
            alert("Користувач вже існує!");
        } else if (!isRegistering && err.response?.status === 404) {
            alert("Користувача не знайдено! Перевірте логін та пароль!");
        } else {
            alert("Сталася помилка. Спробуйте знову пізніше.");
        }
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
            <h1 className={styles['main-header']}>{isRegistering ? 'Реєстрація' : 'Увійти'}</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles["text-inputs"]}>
                    {renderFormFields()}
                </div>
                {isRegistering && (
                    <>
                        <div className={styles['checkbox-pannel']}>
                            <label className={styles['checkbox-container']}>
                                <input onChange={(event) => handleInputChange('personal_data_allow', event.target.checked)} className={styles.checkbox} type="checkbox"/>
                                <span className={styles.checkmark}></span>
                            </label>
                            <h4>Погоджуюсь на обробку персональних даних</h4>
                        </div>
                        <div className={styles['checkbox-pannel']}>
                            <label className={styles['checkbox-container']}>
                                <input onChange={(event) => handleInputChange('is_courier', event.target.checked)} className={styles.checkbox} type="checkbox"/>
                                <span className={styles.checkmark}></span>
                            </label>
                            <h4>Кур'єр</h4>
                        </div>
                    </>
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
