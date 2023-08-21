import React from 'react';
import styles from '../style';
import { actividades } from '../constants';
import { BsArrowRight } from "react-icons/bs";

const muestraActividades = () => {
  return (
    <section id='muestraActividades' className={`flex justify-center items-center flex-col sm:flex-row flex-wrap sm:mb-20 m-6 `}>
  <div className="w-full flex items-center"> 
    <h4 className={`${styles.h4text} xs:mb-2 mb-10 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`}>
      Actividades
    </h4>
    
    <button className="text-black bg-transparent border-none"><a href="/actividades">Ver todos</a></button>
  </div>
  
  {[...actividades].slice(0, 3).map((actividades) => (
    <div key={actividades.id} className={`${styles.flexCenter} flex-1 flex items-center flex-col m-3 mt-5`}>
      <div className="flex items-center">
        <div className="w-16 h-16"> 
          <img src={actividades.img} alt="Imagen de la actividad" />
        </div>
        <h4 className={`${styles.h3text} text-black self-auto mb-3 p-5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`}>
          {actividades.id}
        </h4>
        <div className='pb-3 cursor-pointer'> 
        <a href={`${"actividades/" + actividades.id}`}><BsArrowRight/></a>
        </div>
        
      </div>
      <p className={`${styles.ptext} font-poppins font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-normal text-black self-auto`}>
        {actividades.texto}
      </p>
    </div>
  ))}
</section>
  )
}

export default muestraActividades