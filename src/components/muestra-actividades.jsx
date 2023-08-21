import React from 'react';
import styles from '../style';
import { actividades } from '../constants';

const muestraActividades = () => {
  return (

      <section id='muestraActividades' className="flex justify-center items-center flex-col sm:flex-row flex-wrap sm:mb-20 m-6">   
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {actividades.map((actividad) => (
            <div key={actividad.id} className={`${styles.flexCenter} flex-1 flex items-center flex-col m-3 mt-5`}>
              <div className="flex items-center">
                <div className="w-full h-full"> 
                  <img src={actividad.img} alt="Imagen de la actividad" className='rounded-md' />
                  <h4 className={`${styles.h3text} text-black self-auto mb-3 p-5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`}>
                  {actividad.id.slice(0, 20)} 
                </h4>
                </div>
              </div>
              <p className={`${styles.ptext} font-poppins font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-normal text-black self-auto`}>
                 {actividad.texto.slice(0, 150) + "..."} <button className="text-black bg-transparent border-none"><a href={`${"actividades/" + actividad.id}`}>Más información</a></button>
              </p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default muestraActividades