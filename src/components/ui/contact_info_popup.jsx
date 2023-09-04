import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../style';
import Button from './button';

const ContactInfoPopup = ({ onClose }) => {
  const closePopup = () => {
    if (onClose) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closePopup}>
      <div className="bg-white p-6 rounded-xl shadow-lg" onClick={(e) => e.stopPropagation()}>
        <div className={styles.ptext}>Ubicacion: ......</div>
        <div className={styles.ptext}>Contacto: mtcorrea@fvet.edu.uy</div>
        <div className={styles.ptext}>Telefono: +598 1903 int 2532</div>
      </div>
    </div>,
    document.getElementById('popup-root')
  );
};

export default ContactInfoPopup;
