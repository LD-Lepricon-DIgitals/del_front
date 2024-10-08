import React from "react";
import cl from  "./Button.module.css"

const Button = React.forwardRef(({ className, children, onClick }, ref) =>{
    return (
        <button ref={ref} onClick={onClick} className={`${cl.button} ${className}`}>
            {children}
        </button>
    );
})

export default Button