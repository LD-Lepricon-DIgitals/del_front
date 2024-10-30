import { useState } from 'react';
import styles from './RegisterForm.module.css';
import TextInput from '../../Inputs/TextInput/TextInput.jsx';
import PasswordInput from '../../Inputs/PasswordInput/PasswordInput.jsx';
import useForm from '../../../../hooks/useForm.js';

function RegistrationForm() {
    const [isRegistering, setIsRegistering] = useState(true);

    const initialValues = {
        surname: '',
        name: '',
        patronymic: '',
        address: '',
        phone_number: '',
        password: '',
        submit_password: '',
    };

    const { formValues, handleInputChange } = useForm(initialValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Форма отправлена с данными:", formValues);
    };

    const renderFormFields = () => (
        <>
            {isRegistering && (
                <>
                    <TextInput value={formValues.surname} onInputChange={(value) => handleInputChange('surname', value)} placeholder='Прізвище' className={styles.input} id='surname'/>
                    <TextInput value={formValues.name} onInputChange={(value) => handleInputChange('name', value)} placeholder="Ім'я" className={styles.input} id='name' />
                    <TextInput value={formValues.patronymic} onInputChange={(value) => handleInputChange('patronymic', value)} placeholder="По-батькові" className={styles.input} id='patronymic' />
                    <TextInput value={formValues.address} onInputChange={(value) => handleInputChange('address', value)} placeholder="Адреса" className={styles.input} id='address' />
                </>
            )}
            <TextInput value={formValues.phone_number} onInputChange={(value) => handleInputChange('phone_number', value)} placeholder="Номер телефону" className={styles.input} id='phone_number' />
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
                            <input className={styles.checkbox} type="checkbox"/>
                            <span className={styles.checkmark}></span>
                        </label>
                        <h4>Погоджуюсь на обробку персональних даних</h4>
                    </div>
                )}
                <button type='submit' className={styles.submit}>{isRegistering ? 'Зареєструватись' : 'Увійти'}</button>
                <div className={styles["log-in"]}>
                    <h3>{isRegistering ? 'Вже маєш акаунт?' : 'Не маєш акаунту?'}</h3>
                    <button type='button' className={styles['log-button']} onClick={() => setIsRegistering(!isRegistering)}>
                        {isRegistering ? 'Увійти' : 'Створити'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RegistrationForm;
