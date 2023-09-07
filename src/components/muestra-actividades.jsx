import React from 'react';
import styles from '../style';
import LazyLoad from 'react-lazyload';
import { actividades } from '../constants';

const MuestraActividades = () => {
  return (
    <section id='muestraActividades' className="flex justify-center items-center flex-col sm:flex-row flex-wrap sm:mb-20 m-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:px-2">
        {actividades.map((actividad) => (
          <div key={actividad.id} className='mb-6 xs:mb-10'>
            <div className="flex items-center">
              <div className="w-full h-full">
                <LazyLoad height={200} once placeholder={<div className="placeholder" style={{ height: '200px' }} />} >
                  <img src={actividad.img} alt="Imagen de la actividad" className='rounded-md' />
                </LazyLoad>
                <h4 className={`${styles.h3text} self-auto pl-0 xs:mb-3 xs:pl-0 xs:p-5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`}>
                  {actividad.id.slice(0, 20)}
                </h4>
              </div>
            </div>
            <p className={`${styles.ptext} font-poppins font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-normal text-black self-auto`}>
              {actividad.texto.slice(0, 99) + "..."} <button className="text-black bg-transparent border-none md:text-[18px] sm:text-[16px]"><a href={`${"actividades/" + actividad.id.toLowerCase()}`}>Más info</a></button>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MuestraActividades;