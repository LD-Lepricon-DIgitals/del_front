import React from "react";
import styles from './Modal.module.css'
import { forwardRef } from "react";
import { Transition } from "react-transition-group";// modal animation

const Modal = forwardRef(({ isOpen, children }, ref) => {
return(
    <>
    <Transition in={isOpen} timeout={250} unmountOnExit={true}>
       {(state) => (
        <div className={`${styles.modal} ${styles[`modal--${state}`]}`}>
            <div className={styles['modal-wrapper']}>
            <div ref={ref} className={styles['modal-content']}>
                {children}
            </div>
        </div>
    </div>)}
    </Transition>
    </>
)});


export default Modal