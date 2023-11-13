import React, { useEffect } from 'react';
import styles from './style';
import { Outlet } from 'react-router-dom';
import { NavBar, Footer } from './components';
import backgroundTexture from './assets/background_texture.jpg'; // Import the background image

const App = () => {
  return (
  <div className="w-full min-h-screen flex flex-col"
  style={{
    backgroundImage: `url(${backgroundTexture})`,
    backgroundRepeat: 'repeat',
  }}>
    <div className="flex-shrink-0 bg-black">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
    </div>
    <Outlet/>
    <div className="mt-auto">
      <Footer />
    </div>
  </div>
 );
};

export default App;