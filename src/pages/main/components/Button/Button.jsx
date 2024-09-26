import React from "react";
import cl from  "./Button.module.css"

function Button({className, children}){
    return (
        <button className={`${cl.button} ${className}`}>
            {children}
        </button>
    );
}
export default Button