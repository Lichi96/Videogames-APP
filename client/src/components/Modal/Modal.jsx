import React from 'react';
import { Overlay, ContainerModal } from "./Modal-styles.js";

const Modal = ({title, message, icon, question, closeModal, action}) => {

    return (
        <div>
            <Overlay>
                <ContainerModal>
                    <div className="header">
                        <h4 style={{ color: title === "Success" ? "#1a9622" : "#eb9534"}}>{title}</h4>
                        <span onClick={closeModal}><i className="fas fa-times"></i></span>
                    </div>
                    <div className="content">
                        <p>{message}</p>
                        <span><i className={icon} style={{ color: title === "Success" ? "#1a9622" : "#eb9534"}}></i></span>
                    </div>
                    {
                        question && 
                            <div className="buttons">
                                <button onClick={action} className="btn-ok">Yes</button>
                                <button onClick={closeModal} className="btn-cancel">Cancel</button>
                            </div>
                    }
                </ContainerModal>
            </Overlay>
        </div>
    )

}

export default Modal;