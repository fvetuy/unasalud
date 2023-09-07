import React from 'react'
import styles from '../style';
import { MuestraActividades, Filter } from '../components';

const actividades = () => {
  return (
  <div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}> 
        <div className={`${styles.boxWidth}`}>
           <div>
            <h2 className={`${styles.h2text} mt-16  mb-6 ml-7 xs:mb-10 xs:ml-7`} >Nuestras actividades</h2>
           </div>
           <div className={`${styles.boxWidth}`}>
          <Filter/>
        </div>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
        <div className={`${styles.boxWidth}`}>
          <MuestraActividades />
        </div>
    </div>
  </div>
  )
}

export default actividades