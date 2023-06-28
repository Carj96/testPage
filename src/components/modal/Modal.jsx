import React from 'react';
import './Modal.style.css';

function Modal({ header, children }) {
  return (
    <div className="Modal">
      <h2>{header}</h2>
      {children}
    </div>
  );
}

export default Modal;
