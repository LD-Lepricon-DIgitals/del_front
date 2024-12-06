import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const initValues = {
        user_login: '',
        user_name: '',
        user_surname: '',
        user_address: '',
        user_phone : '',
        user_role : ''
    }

    const [userInfo, setUserInfo] = useState(initValues);
    const [isUserAuthorized, setIsUserAuthorized] = useState(false);

    return(
        <AppContext.Provider value={{ userInfo, setUserInfo, isUserAuthorized, setIsUserAuthorized }}>
            {children}
        </AppContext.Provider>
    );
};