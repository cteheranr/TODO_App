import React from "react";
import ReactDOM from "react-dom";
import './ModalCreate.css'

function ModalCreate({ children }){
    return ReactDOM.createPortal(
        <div className="modal-create">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { ModalCreate };