import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../style';

const ContactInfoPopup = ({ onClose }) => {
  const closePopup = () => {
    if (onClose) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={closePopup}>
      <div className="bg-white p-6 rounded-xl shadow-lg" onClick={(e) => e.stopPropagation()}>
        <div className={styles.ptext}>Ubicacion:
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d561.254494536909!2d-56.06653750666933!3d-34.791883092946215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f8119aed16175%3A0x6a81fcddc1c47f32!2sFacultad%20de%20Veterinaria!5e0!3m2!1ses!2suy!4v1697671172332!5m2!1ses!2suy" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className={styles.ptext}>Contacto: mtcorrea@fvet.edu.uy</div>
        <div className={styles.ptext}>Telefono: +598 1903 int 2532</div>
      </div>
    </div>,
    document.getElementById('popup-root')
  );
};

export default ContactInfoPopup;
