import React, { useState } from 'react';
import styles from '../style';

const Filter = ({ selectedButton, changeCategory }) => {
  const handleClick = (button) => {
    changeCategory(button);
  };

  return (
    <section id='muestraActividades' className={`flex items-center justify-between flex-row ${styles.marginX} max-w-[400px]`}>
        <li className="sm:col-span-1 flex justify-center mr-3">
          <button
            className={`p-3 rounded-3xl text-center ${selectedButton === 'educacion' ? 'bg-cyan-600 text-white' : 'bg-white'}`}
            onClick={() => handleClick('educacion')}
          >
            Educacion
          </button>
        </li>
        <li className="sm:col-span-1 flex justify-center mr-3">
          <button
            className={`p-3 rounded-3xl text-center ${selectedButton === 'investigacion' ? 'bg-cyan-600 text-white' : 'bg-white'}`}
            onClick={() => handleClick('investigacion')}
          >
            Investigacion
          </button>
        </li>
        <li className="sm:col-span-1 flex justify-center">
          <button
            className={`p-3 rounded-3xl text-center ${selectedButton === 'extension' ? 'bg-cyan-600 text-white' : 'bg-white'}`}
            onClick={() => handleClick('extension')}
          >
            Extension
          </button>
        </li>
    </section>
  );
};

const Actividades = ({category}) => {
  const [currentCategory, setCurrentCategory] = useState("educacion");

  const changeCurrentCategory = (newCategory) => {
    if(newCategory != currentCategory){
      setCurrentCategory(newCategory);
    }
  };

  return (
    <div>
      <div> 
        <div>
          <div className={`${styles.marginX}`}>
            <h2 className={`${styles.h2text} mt-16  mb-6`} >Nuestras actividades</h2>
          </div>
           <Filter selectedButton={currentCategory} changeCategory={changeCurrentCategory} />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
        <div className={`${styles.boxWidth}`}>

        </div>
      </div>
    </div>
  );
};

export default Actividades;
