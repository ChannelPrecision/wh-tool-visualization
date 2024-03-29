import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ title, content, onDismiss, actions }) => {
    return ReactDOM.createPortal(
        <div onClick={onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <i class="close icon" onClick={onDismiss}></i>
                <div className="header">{title}</div>
                <div className="content">
                    {content}
                </div>
                <div className="actions">
                    {actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;
