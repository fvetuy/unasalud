import React from 'react';
import styles from '../style';
import { misionYVision } from '../constants';

const misionVision = () => {
  return (
    <section id='misionVision' className={`flex justify-center items-center flex-col sm:flex-row flex-wrap sm:mb-20 m-6 `}>

  <h4 className={`${styles.h4text} ${styles.flexCenter} xs:mb-2 mb-10`}>Programa Una Salud Facultad de Veterinaria de la Udelar</h4>
  
  {misionYVision.map((misionVision) => (
    <div key={misionVision.id} className={`${styles.flexCenter} flex-1 flex items-center flex-col m-3 mt-5`}>
      
      <div className="flex items-center">
  <div className="w-3 h-3 bg-secondary rounded-full"></div>
  <h4 className={` ${styles.h3text} text-black self-auto mb-3 p-5`}>
    {misionVision.id}
  </h4>
</div>
      <p className={`${styles.ptext} font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-black self-auto`}>
        {misionVision.texto}
      </p>
    </div>
  ))}
</section>
  )
}

export default misionVision