import React, { useEffect } from 'react';
import styles from './style';
import { NavBar, Footer } from './components';
import backgroundTexture from './assets/background_texture.jpg';

const App = () => {
  return (
  <div className="w-full min-h-screen flex flex-col"
  style={{
    backgroundImage: `url(${backgroundTexture})`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
  }}>
    <div className="flex-shrink-0 bg-black">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
    </div>
    <div className="mt-auto">
      <Footer />
    </div>
  </div>
 );
};

export default App;