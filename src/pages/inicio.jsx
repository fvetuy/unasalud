import React from 'react'
import styles from '../style';
import { NavBar, Hero, MisionVision, MuestraActividades, Footer } from '../components';

const inicio = () => {
  return (
    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
      <div className={`${styles.boxWidth}`}>
        <MisionVision/>
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
      <div className={`${styles.boxWidth}`}>
        <MuestraActividades/>
      </div>
    </div>
    </div>
  )
}

export default inicio