import React from 'react';
import './Modal.css'; // Import the CSS for styling

function Modal({ isOpen, onClose, message }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>×</span>
        <h2>{message}</h2>
      </div>
    </div>
  );
}

export default Modal;
