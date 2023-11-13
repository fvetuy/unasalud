import React from 'react';
import styles from '../style';
import { misionYVision } from '../constants';

const misionVision = () => {
  return (
    <section id='mision-vision' className={`${styles.marginX} mt-10`}>
      <div className='flex-col grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 sm:gap-60 gap-2'>
  {misionYVision.map((misionVision) => (
    <div key={misionVision.id} className="flex flex-col mt-0">
      <div className={`font-dmsans ${styles.flexCenter} text-[30px] font-medium text-black mb-4`}>

          {misionVision.id}

      </div>
      <p className={`${styles.ptext} max-w-[1400px] text-center`}>
        {misionVision.texto}
      </p>
    </div>
  ))}
</div>

</section>
  )
}

export default misionVision