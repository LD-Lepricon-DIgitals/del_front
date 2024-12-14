import styles from "./Profile.module.css";
import Navbar from "../shared/navigation/navigation.jsx";
import Edit_ico from "../shared/icons/Edit_ico.svg";
import Save_ico from "../shared/icons/Save_ico.svg";
import Orders_ico from "../shared/icons/Orders_ico.svg";
import ValidateEditInput from "./ValidateEditInput.js";
import Modal from "../shared/Modals/Modal.jsx";
import EditPasswordForm from "../shared/Modals/EditPasswordForm/EditPasswordForm.jsx";
import useClickOutside from "../../hooks/useClickOutside.js";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext.jsx";
import { React, useState, useRef, useEffect, useContext } from "react";
import Home_ico from "../shared/icons/Home_ico.svg";
import { Requests } from "../../api/axios_queries/requests.js";
import axios from "axios";

function ProfileForm() {
  const { userInfo, setUserInfo } = useContext(AppContext);
  const { avatar, setAvatar } = useContext(AppContext);
  const [validationError, setValidationError] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const requests = new Requests(axios);

  const toggleEdit = (e) => {
    setIsVisible(!isVisible);

    if (isEditable) {
      handleSubmit(e);
    } else {
      setIsEditable(!isEditable);
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userResponse = await requests.getUserInfo();
        if (userResponse && userResponse.data) {
          setUserInfo(userResponse.data);
        } else {
          console.error("User data is empty or invalid");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (!userInfo) {
      getUserData();
    }
  }, [userInfo, setUserInfo]);

  const handleInputChange = (field, value) => {
    const updatedUserInfo = { ...userInfo, [field]: value };
    setUserInfo({ ...updatedUserInfo });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validate_res = ValidateEditInput(userInfo);
    if (!validate_res["success"]) {
      setValidationError(validate_res["message"]);
      return;
    }

    setValidationError(null);

    try {
      const response = requests.updateUserInfo({ ...userInfo });
      console.log("Дані успішно оновлено:", response);
      setIsEditable(false);
    } catch (error) {
      console.error("Помилка оновлення даних:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          const desiredWidth = 200;
          const desiredHeight = 200;

          canvas.width = desiredWidth;
          canvas.height = desiredHeight;

          const ctx = canvas.getContext("2d");

          const offsetX = (img.width - desiredWidth) / 2;
          const offsetY = (img.height - desiredHeight) / 2;

          ctx.drawImage(
            img,
            offsetX,
            offsetY,
            desiredWidth,
            desiredHeight,
            0,
            0,
            desiredWidth,
            desiredHeight
          );

          const croppedImageUrl = canvas.toDataURL("image/jpeg");
          setAvatar(croppedImageUrl);

          try {
            const response = requests.changeAvatar(avatar);
            console.log("Аватар успішно оновлено:", response);
          } catch (error) {
            console.error("Помилка оновлення даних:", error);
          }
        };
      };
      reader.readAsDataURL(file);
    }
  };

  function OpenModalOnClick() {
    setIsRegModalOpen(!isRegModalOpen);
  }
  useClickOutside([modalRef], isRegModalOpen, () => {
    setIsRegModalOpen(false);
  });

  const goHome = () => {
    navigate("/");
  };

  const goToOrders = () => {
    navigate("/orders");
  };

  useEffect(() => {
    if (userInfo && userInfo.user_photo) {
      setImageSrc(`data:image/jpeg;base64,${userInfo.user_photo}`);
    }
  }, [userInfo]);

  return (
    <div className={styles["profile-page"]}>
      <Navbar></Navbar>
      <p className={styles["data-title"]}>
        {(userInfo.user_name || "") + " " + userInfo.user_surname}
      </p>
      <div className={styles["profile"]}>
        <div className={styles["content"]}>
          <div className={styles["profile-content"]}>
            <label className={styles["label"]}>Ім'я</label>
            <input
              className={styles["data-field"]}
              type="text"
              id="name"
              value={userInfo.user_name}
              onChange={(e) => handleInputChange("user_name", e.target.value)}
              disabled={!isEditable}
            />

            <label className={styles["label"]}>Прізвище</label>
            <input
              className={styles["data-field"]}
              type="text"
              id="surname"
              value={userInfo.user_surname}
              onChange={(e) =>
                handleInputChange("user_surname", e.target.value)
              }
              disabled={!isEditable}
            />

            <label className={styles["label"]}>Логін</label>
            <input
              className={styles["data-field"]}
              type="text"
              id="login"
              value={userInfo.user_login}
              onChange={(e) => handleInputChange("user_login", e.target.value)}
              disabled={!isEditable}
            />

            <label className={styles["label"]}>Номер телефону</label>
            <input
              className={styles["data-field"]}
              type="text"
              id="phone"
              value={userInfo.user_phone}
              onChange={(e) => handleInputChange("user_phone", e.target.value)}
              disabled={!isEditable}
            />

            {!(userInfo.user_role === "worker") && (
              <>
                <label className={styles["label"]}>Адреса</label>
                <input
                  className={styles["data-field"]}
                  type="text"
                  id="address"
                  value={userInfo.user_address}
                  onChange={(e) =>
                    handleInputChange("user_address", e.target.value)
                  }
                  disabled={!isEditable}
                />
              </>
            )}
          </div>
          <div className={styles["avatar-container"]}>
            <div className={styles["avatar"]}>
              <img
                src={imageSrc}
                alt="Avatar"
                className={styles["avatar-img"]}
              />
              {isVisible && (
                <>
                  <label htmlFor="file-input" className={styles["file-input"]}>
                    <img
                      src={Edit_ico}
                      alt="edit icon"
                      className={styles["edit-avatar-icon"]}
                    />
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className={styles["hidden-input"]}
                  />
                </>
              )}
            </div>
            {userInfo.user_role === "worker" && (
              <div className={styles["role"]}>Кур'єр</div>
            )}
          </div>
          <button onClick={() => goHome()} className={styles["home-btn"]}>
            <img src={Home_ico} className={styles["home-ico"]} />
          </button>
        </div>

        <div className={styles["edit-container"]}>
          <button onClick={(e) => toggleEdit(e)} className={styles["edit-btn"]}>
            {isEditable ? (
              <img
                src={Save_ico}
                alt="save icon"
                className={styles["edit-icon"]}
              />
            ) : (
              <img
                src={Edit_ico}
                alt="edit icon"
                className={styles["edit-icon"]}
              />
            )}
            {isEditable ? "Зберегти" : "Змінити"}
          </button>
          <button onClick={OpenModalOnClick} className={styles["edit-btn"]}>
            <img
              src={Edit_ico}
              alt="edit icon"
              className={styles["edit-icon"]}
            />
            Змінити пароль
          </button>
          {userInfo.user_role === "worker" && (
            <button onClick={() => goToOrders()} className={styles["edit-btn"]}>
              <img
                src={Orders_ico}
                alt="edit icon"
                className={styles["edit-icon"]}
              />
              До замовлень
            </button>
          )}
        </div>
        <div className={styles["validaton-error"]}>
          {validationError !== null && <p>{validationError}</p>}
        </div>

        {isRegModalOpen && (
          <Modal ref={modalRef} isOpen={isRegModalOpen}>
            <EditPasswordForm onClose={() => setIsRegModalOpen(false)} />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default ProfileForm;
