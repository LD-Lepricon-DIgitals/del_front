import styles from './Profile.module.css';
import Navbar from "../shared/navigation/navigation.jsx";
import Edit_ico from "../shared/icons/Edit_ico.svg";
import Avatar_ico from "../shared/icons/Avatar_ico.svg";
import Save_ico from "../shared/icons/Save_ico.svg"
import Orders_ico from "../shared/icons/Orders_ico.svg"
import ValidateEditInput from './ValidateEditInput.js'
import Modal from "../shared/Modals/Modal.jsx";
import EditPasswordForm from "../shared/Modals/EditPasswordForm/EditPasswordForm.jsx"
import useClickOutside from "../../hooks/useClickOutside.js";
import { useNavigate } from 'react-router-dom';
import { AppContext } from "../../context/AppContext.jsx";
import { React, useState, useRef, useEffect, useContext } from "react";
import Home_ico from '../shared/icons/Home_ico.svg'



function ProfileForm() {    
    const { userInfo, setUserInfo } = useContext(AppContext);
    const [formValue, setFormValue] = useState({...userInfo});
    const [validationError, setValidationError] = useState(null);
    const [isEditable, setIsEditable] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isRegModalOpen, setIsRegModalOpen] = useState(false);
    const modalRef = useRef(null);


    const toggleEdit = (e) => {

        setIsVisible(!isVisible);

        if (isEditable) {
            handleSubmit(e);
        }
        else {
            setIsEditable(!isEditable);
        }
    };


    const handleInputChange = (field, value) => {
        setFormValue({ ...formValue, [field]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        let validate_res = ValidateEditInput(formValue);
        if (!validate_res['success']) {
            setValidationError(validate_res['message']);
            return;
        }

        setValidationError(null);

        setUserInfo({ ...formValue });
        setIsEditable(false);
    };



    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const img = new Image();
                img.src = reader.result;

                img.onload = () => {

                    const canvas = document.createElement('canvas');
                    const desiredWidth = 200;
                    const desiredHeight = 200;

                    canvas.width = desiredWidth;
                    canvas.height = desiredHeight;

                    const ctx = canvas.getContext('2d');

                    const offsetX = (img.width - desiredWidth) / 2;
                    const offsetY = (img.height - desiredHeight) / 2;

                    ctx.drawImage(
                        img,
                        offsetX, offsetY,
                        desiredWidth, desiredHeight,
                        0, 0,
                        desiredWidth, desiredHeight
                    );

                    const croppedImageUrl = canvas.toDataURL('image/jpeg');
                    setAvatar(croppedImageUrl);
                };
            };
            reader.readAsDataURL(file);
        }
    }

    function OpenModalOnClick() {
        setIsRegModalOpen(!isRegModalOpen);
   }
   useClickOutside([modalRef], isRegModalOpen, () => 
    {
        setIsRegModalOpen(false)
    });

    const navigate = useNavigate();
    const gohome = () => {
        navigate('/');
    };
    
    return (
        <div className={styles['profile-page']}>
            <Navbar></Navbar>
            <p className={styles['data-title']}>{formValue.user_name + " " + formValue.user_surname}</p>
            <div className={styles.profile}>
                <div className={styles['content']}>
                    <div className={styles['profile-content']}>
                        <label className={styles.label}>Ім'я</label>
                        <input className={styles['data-field']} type="text" id="name" value={formValue.user_name} onChange={(e) => handleInputChange('user_name', e.target.value)} disabled={!isEditable} />

                        <label className={styles.label}>Прізвище</label>
                        <input className={styles['data-field']} type="text" id="surname" value={formValue.user_surname} onChange={(e) => handleInputChange('user_surname', e.target.value)} disabled={!isEditable} />

                        {/* <label className={styles.label}>По-батькові</label>
                        <input className={styles['data-field']} type="text" id="patronymic" value={formValue.patronymic} onChange={(e) => handleInputChange('patronymic', e.target.value)} disabled={!isEditable} />
 */}
                        {!(formValue.user_role === "courier") && (
                            <>
                                <label className={styles.label}>Адреса</label>
                                <input className={styles['data-field']} type="text" id="address" value={formValue.user_address} onChange={(e) => handleInputChange('user_address', e.target.value)} disabled={!isEditable} />
                            </>
                        )} 
                        
                        <label className={styles.label}>Номер телефону</label>
                        <input className={styles['data-field']} type="text" id="phone" value={formValue.user_phone} onChange={(e) => handleInputChange('user_phone', e.target.value)} disabled={!isEditable} />
                        
                        


                    </div>
                    <div className={styles['avatar-container']}>
                        <div className={styles['avatar']}>
                            <img
                                src={avatar || Avatar_ico}
                                alt='Avatar'
                                className={styles['avatar-img']}
                            />
                            {isVisible && (
                                <>
                                    <label htmlFor="file-input" className={styles['file-input']} >
                                        <img src={Edit_ico} alt='edit icon' className={styles['edit-avatar-icon']} />
                                    </label>
                                    <input
                                        id='file-input'
                                        type='file'
                                        accept='image/*'
                                        onChange={handleImageChange}
                                        className={styles['hidden-input']}
                                    />
                                </>
                            )}

                        </div>
                        {formValue.user_role === "courier" && (
                            <div className={styles['role']}>Кур'єр</div>
                        )}
                    </div>
                </div>
                
                <div className={styles['edit-container']}>
                    <button onClick={(e) => toggleEdit(e)} class={styles['edit-btn']}>
                        {isEditable ? (<img src={Save_ico} alt='save icon' className={styles['edit-icon']}/>) : (<img src={Edit_ico} alt='edit icon' className={styles['edit-icon']}/>)}
                        {isEditable ? 'Зберегти' : 'Змінити'}
                    </button>
                    <button onClick={OpenModalOnClick} class={styles['edit-btn']}>
                        <img src={Edit_ico} alt='edit icon' className={styles['edit-icon']} />
                        Змінити пароль
                    </button>
                    {formValue.user_role === "courier" && (
                        <button  onClick={(e) => toggleEdit(e)} className={styles['edit-btn']}>
                            <img src={Orders_ico} alt='edit icon' className={styles['edit-icon']} />
                            До замовлень
                        </button>
                    )}

                    
                </div>
                <div className={styles['validaton-error']}>
                    {(validationError !== null) && (
                        <p>{validationError}</p>
                    )}
                </div>
                
                {isRegModalOpen && (
                    <Modal ref={modalRef} isOpen={isRegModalOpen}>
                        <EditPasswordForm onClose={() => setIsRegModalOpen(false)}/>
                    </Modal>
                )}

            </div>

            <button onClick = {() => gohome()} class={styles['home-btn']}>
                <img src={Home_ico} className={styles['home-ico']}/>
            </button>

        </div>

    );
}


export default ProfileForm;
