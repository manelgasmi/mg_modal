import React from 'react';
import './MgModal.css';

const MgModal = ({ isOpen, setIsOpen, title, body }) => {
  if (!isOpen) {
    return null;
  }
  
  function handleClose() {
    setIsOpen(false);
  }
  
  function handleBackgroundClick(event) {
    if (event.target.className === 'modal-overlay') {
      setIsOpen(false);
    }
  }
  
  return (
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div className="modal-container">
        <button className="modal-close" onClick={handleClose}>
          ×
        </button>
        {title && (
          <div className="modal-header">
            <h2 className="modal-title">{title}</h2>
          </div>
        )}
        <div className={`modal-body ${!title ? 'no-header-body' : ''}`}>
          {body}
        </div>
      </div>
    </div>
  );
}

export default MgModal;