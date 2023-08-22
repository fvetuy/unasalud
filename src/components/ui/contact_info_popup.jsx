import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../style';
import Button from './button';

const ContactInfoPopup = ({onClose}) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className={styles.ptext}>Ubicacion: ......</div>
        <div className={styles.ptext}>Contacto: mtcorrea@fvet.edu.uy</div>
        <div className={styles.ptext}>Telefono: +598 1903 int 2532</div>
        <Button text={'Cerrar'} className={'mt-5'} onClick={onClose}></Button>
      </div>
    </div>,
    document.getElementById('popup-root')
  );
};

export default ContactInfoPopup;