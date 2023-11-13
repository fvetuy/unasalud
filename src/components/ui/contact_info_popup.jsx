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
        <div className='mb-2'>
          <h1 className={`${styles.ptext}`}>Ubicación:</h1>
          <div className='grid grid-cols-2 grid-flow-row justify-center justify-items-center sm:md:gap-10'>
            <div className={`${styles.ptext}`}>
              <h2>Cede central</h2>
              <a className='text-black/70 hover:text-black transition-colors' target="_blank" href='https://maps.app.goo.gl/iQszE6jkHuy7Q5zr8'>Ruta 8, km 18
        Montevideo, Uruguay 13.000</a>
            </div>
        <div className={`${styles.ptext} ml-10`}>
          <h2>Cenur Litoral Norte</h2>
          <ul>
            <li><a className='text-black/70 hover:text-black transition-colors' target="_blank" href='http://www.unorte.edu.uy/'>Sede Salto</a></li>
            <li><a className='text-black/70 hover:text-black transition-colors' target="_blank" href='http://www.cup.edu.uy/'>Sede Paysandú</a></li>
            <li><a className='text-black/70 hover:text-black transition-colors' target="_blank" href='http://www.eemac.edu.uy/'>EEMAC</a></li>
          </ul>
        </div>
          </div>
        </div>
        <div className={styles.ptext}>Email: mtcorrea@fvet.edu.uy</div>
        <div className={styles.ptext}>Telefono: +598 1903 int 2532</div>
      </div>
    </div>,
    document.getElementById('popup-root')
  );
};

export default ContactInfoPopup;
