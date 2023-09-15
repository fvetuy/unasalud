import React from 'react'
import styles from '../style';
import { Hero, MisionVision, MuestraActividadesInicio } from '../components';
import { logoBadge } from '../assets';

const inicio = () => {
  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    <div className={`${styles.flexCenter}`}> 
      <div className={`${styles.boxWidth}`}>
        <div className={`${styles.flexCenter}`}>
          <img className="w-[110px] h-[110px] sm:w-[160px] sm:h-[160px] object-contain" src={logoBadge} alt="logo-fvet"/>
        </div>
        <MisionVision/>
      </div>
    </div>
    </div>
  )
}

export default inicio