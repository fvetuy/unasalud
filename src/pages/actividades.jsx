import React, { useState } from 'react';
import styles from '../style';

const Filter = ({ selectedButton, changeCategory }) => {
  const handleClick = (button) => {
    changeCategory(button);
  };

  return (
    <section id='muestraActividades' className="flex items-center flex-col sm:flex-row flex-wrap  my-10 sm:my-16 md:my-16">
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:px-2 md:ml-2 sm:ml-2'>
        <li className="sm:col-span-1 flex justify-center">
          <button
            className={`p-2 px-6 py-2 rounded-3xl text-center ${selectedButton === 'educacion' ? 'bg-amber-500 text-white' : 'bg-white'}`}
            onClick={() => handleClick('educacion')}
          >
            Educacion
          </button>
        </li>
        <li className="sm:col-span-1 flex justify-center">
          <button
            className={`p-2 md:px-6 md:py-2 rounded-3xl text-center ${selectedButton === 'investigacion' ? 'bg-amber-500 text-white' : 'bg-white'}`}
            onClick={() => handleClick('investigacion')}
          >
            Investigacion
          </button>
        </li>
        <li className="sm:col-span-1 flex justify-center">
          <button
            className={`p-2 md:px-6 md:py-2 rounded-3xl text-center ${selectedButton === 'extension' ? 'bg-amber-500 text-white' : 'bg-white'}`}
            onClick={() => handleClick('extension')}
          >
            Extension
          </button>
        </li>
      </ul>
    </section>
  );
};

const Actividades = ({category}) => {
  const [currentCategory, setCurrentCategory] = useState("educacion");

  const changeCurrentCategory = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}> 
        <div className={`${styles.boxWidth}`}>
          <div>
            <h2 className={`${styles.h2text} mt-16  mb-6 ml-7 xs:mb-10 xs:ml-7`} >Nuestras actividades</h2>
          </div>
          <div className={`${styles.boxWidth}`}>
            <Filter selectedButton={currentCategory} changeCategory={changeCurrentCategory} />
          </div>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
        <div className={`${styles.boxWidth}`}>
          {/* Aquí puedes usar currentCategory para mostrar el contenido correspondiente a la categoría seleccionada */}
        </div>
      </div>
    </div>
  );
};

export default Actividades;
