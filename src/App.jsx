import React from 'react'
import styles from './style';
import { NavBar, Hero, Footer } from './components';

const App = () => (
  <div className='bg-white w-full overflow-hidden'>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}> 
      <div className={`${styles.boxWidth}`}>
        <NavBar/>
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}> 
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
  </div>
)

export default App