import React from "react";
import Button from "../shared/NavigationButton/Button";
import HomeIco from "../shared/icons/TEMP_Home_ico.svg"
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";

function Profile(){
    const {userInfo} = useContext(AppContext);

    return(
        <div>
            <Link to="/" ><Button><img className="ico" src={HomeIco} alt="Home page" /></Button></Link>
            <p>{userInfo.user_login}</p>    
        </div>
    );
}

export default Profile;