import React from 'react';
import styles from '../style';
import { misionYVision } from '../constants';
import { logoBadge } from '../assets/index';
const misionVision = () => {
  return (
    <section id='misionVision' className={`flex flex-col ${styles.marginX}`}>

    <div className='flex flex-col '>
    {misionYVision.map((misionVision) => (
      <div key={misionVision.id} className="flex flex-col mt-10">
        <div className="flex items-center">
          <h4 className={`font-dmsans text-[30px] font-medium text-black`}>
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