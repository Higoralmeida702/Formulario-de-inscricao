import React from "react";
import './modal.css'

export const Modal = (props) => {
    const {onClose, email } = props
    return (
        <div>
            <div className="containerModal">
                <div className="modal">
        <div className="modalTexto">
        <h1>Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <span>{email}</span>. Please open it and cilck the button inside to confirm your subscription</p>
        </div>         
            <div>
                <button onClick={() => onClose()} className="designBotao">
                    Dismiss message
                </button>             
            </div>
                 </div>
            </div>
        </div>
    )
}