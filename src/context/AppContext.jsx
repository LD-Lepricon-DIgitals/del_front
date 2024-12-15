import React, { useState, useEffect, createContext } from "react";
import { Requests } from "../api/axios_queries/requests";
import axiosClient from "../api/axios_queries/axios";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initValues = {
    user_login: "",
    user_name: "",
    user_surname: "",
    user_address: "",
    user_phone: "",
    user_role: "",
    user_photo: "",
  };

  const passwordValues = {
    old_password: "",
    new_password: "",
  };

  const [userInfo, setUserInfo] = useState(initValues);
  const [isUserAuthorized, setIsUserAuthorized] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [userPassword, setUserPassword] = useState(passwordValues);

  return (
    <AppContext.Provider
      value={{
        userInfo,
        setUserInfo,
        isUserAuthorized,
        setIsUserAuthorized,
        avatar,
        setAvatar,
        userPassword,
        setUserPassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
