import React from 'react';
import { IoClose } from 'react-icons/io5';

import './Modal.css';

const Modal = ({ children, handleClose, title }) => {
  return (
    <div className="modal">
      <div className="modal__inner">
        <IoClose className="modal__close" onClick={handleClose} />
        {title ? <div className="modal__title">{title}</div> : null}
        {children}
      </div>
    </div>
  );
};

export default Modal;
