import React from 'react';
import styles from '../style';
import { actividades } from '../constants';
import { BsArrowRight } from "react-icons/bs";

const muestraActividadesInicio = () => {
  return (

      <section id='muestraActividades' className="flex justify-center items-center flex-col sm:flex-row flex-wrap sm:mb-20 m-6">
        <div className="w-full flex items-center"> 
          <h4 className={`${styles.h4text} xs:mb-2 mb-10 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`}>
            Actividades
          </h4>
          
          <button className="text-black bg-transparent border-none"><a href="/actividades">Ver todos</a></button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[...actividades].slice(0, 3).map((actividad) => (
           <div key={actividad.id} className={${styles.flexStart} flex-1 flex  flex-col m-3 mt-5 py-12 px-8 bg-[#E3DEC8]  rounded-xl }>
              <div className="flex items-center">
                <div className="w-16 h-16"> 
                  <img src={actividad.icono} alt="Imagen de la actividad" />
                </div>
                <h4 className={`${styles.h3text} text-black self-auto mb-3 p-5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`}>
                  {actividad.id.slice(0, 20)}
                </h4>
                <div className='pb-3 cursor-pointer'> 
                  <a href={`${"actividades/" + actividad.id}`}><BsArrowRight/></a>
                </div>
              </div>
              <p className={`${styles.ptext} font-poppins font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-normal text-black self-auto`}>
                {actividad.texto.slice(0, 150)}
              </p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default muestraActividadesInicio