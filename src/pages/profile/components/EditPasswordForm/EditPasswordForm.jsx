import styles from "./EditPasswordForm.module.css";
import ValidatePasswordEdit from "./ValidatePassword.js";
import Save_ico from "../../../shared/icons/Save_ico.svg";
import Hide_ico from "../../../shared/icons/Hide_ico.svg";
import Show_ico from "../../../shared/icons/Show_ico.svg";
import {Requests} from "../../../../api/axios_queries/requests.js";
import {AppContext} from "../../../../context/AppContext.jsx";
import {React, useState, useRef, useEffect, useContext} from "react";
import axios from "axios";

function EditPassword({onClose}) {
    const [userPassword, setUserPassword] = useState(null);
    const [validationError, setValidationError] = useState(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
    const requests = new Requests(axios);

    const handleInputChange = (field, value) => {
        setUserPassword({...userPassword, [field]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validate_res = ValidatePasswordEdit(userPassword);
        if (!validate_res["success"]) {
            setValidationError(validate_res["message"]);
            return;
        }

        try {
            const response = requests.changePassword({...userPassword});
            console.log("Дані успішно оновлено:", response);
        } catch (error) {
            console.error("Помилка оновлення даних:", error);
        }

        onClose();
        setValidationError(null);
    };

    const togglePasswordHiding = (e) => {
        e.preventDefault();
        setIsPasswordVisible(!isPasswordVisible);
    };

    const toggleNewPasswordHiding = (e) => {
        e.preventDefault();
        setIsNewPasswordVisible(!isNewPasswordVisible);
    };

    const PasswordInputType = (prop) => {
        if (prop) {
            return "text";
        }
        return "password";
    };

    return (
        <div className={styles["edit-password-container"]}>
            <h1 className={styles["title"]}>Зміна пароля</h1>
            <form className={styles["form"]}>
                <div className={styles["field"]}>
                    <input
                        className={styles["input-field"]}
                        placeholder="Введіть старий пароль..."
                        type={PasswordInputType(isPasswordVisible)}
                        onChange={(e) => handleInputChange("old_password", e.target.value)}
                    />
                    {isPasswordVisible ? (
                        <button
                            onClick={togglePasswordHiding}
                            className={styles["hide-btn"]}
                        >
                            <img
                                src={Hide_ico}
                                alt="hide icon"
                                className={styles["hide-ico"]}
                            />
                        </button>
                    ) : (
                        <button
                            onClick={togglePasswordHiding}
                            className={styles["hide-btn"]}
                        >
                            <img
                                src={Show_ico}
                                alt="show icon"
                                className={styles["hide-ico"]}
                            />
                        </button>
                    )}
                </div>
                <div className={styles["field"]}>
                    <input
                        className={styles["input-field"]}
                        placeholder="Введіть новий пароль..."
                        type={PasswordInputType(isNewPasswordVisible)}
                        onChange={(e) => handleInputChange("new_password", e.target.value)}
                    />
                    {isNewPasswordVisible ? (
                        <button
                            onClick={toggleNewPasswordHiding}
                            className={styles["hide-btn"]}
                        >
                            <img
                                src={Hide_ico}
                                alt="hide icon"
                                className={styles["hide-ico"]}
                            />
                        </button>
                    ) : (
                        <button
                            onClick={toggleNewPasswordHiding}
                            className={styles["hide-btn"]}
                        >
                            <img
                                src={Show_ico}
                                alt="show icon"
                                className={styles["hide-ico"]}
                            />
                        </button>
                    )}
                </div>

                <button className={styles["edit-btn"]} onClick={(e) => handleSubmit(e)}>
                    <img src={Save_ico} alt="save icon" className={styles["save-icon"]}/>
                    Зберегти зміни
                </button>
                {validationError !== null && (
                    <p className={styles["validaton-error"]}>{validationError}</p>
                )}
            </form>
        </div>
    );
}

export default EditPassword;
