import React from 'react';
import styles from '../style';
import { misionYVision } from '../constants';
import { logoBadge } from '../assets';

const misionVision = () => {
  return (
    <section id='mision-vision' className={`${styles.marginX} sm:mt-60`}>

     <div className={`${styles.flexCenter}`}>
        <img className="w-[110px] h-[110px] sm:w-[160px] sm:h-[160px] object-contain" src={logoBadge} alt="logo-fvet"/>
      </div>

      <div className='flex-col grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 sm:gap-60 gap-2'>
  {misionYVision.map((misionVision) => (
    <div key={misionVision.id} className="flex flex-col mt-10">
      <div className={`font-dmsans ${styles.flexCenter} text-[30px] font-medium text-black mb-4`}>
        <h4>
          {misionVision.id}
        </h4>
      </div>
      <p className={`${styles.ptext} max-w-[1400px] text-left`}>
        {misionVision.texto}
      </p>
    </div>
  ))}
</div>

</section>
  )
}

export default misionVision