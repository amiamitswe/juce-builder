import React from 'react';
import classes from './Modal.module.css';

const Modal = ({ children, display, closeModal }) => {
  return (
    <div c>
      <div className={classes.backdrop} style={{ display }} />
      <div className={classes.modalBody} style={{ display }}>
        <button
          type="button"
          className={classes.close_modal}
          onClick={closeModal}
        >
          <i className="fal fa-times-circle" />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
