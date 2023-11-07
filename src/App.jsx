import React, { useEffect } from 'react';
import styles from './style';
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import { Inicio, Programa, Actividades, ActivityDetail, Noticias, Admin, PageNotFound } from './pages';
import { NavBar, Footer } from './components';
import backgroundTexture from './assets/background_texture.jpg'; // Import the background image
import { urlBasename } from './constants';

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
    <div className="flex-grow">
      <Routes>
        <Route path={urlBasename + '/'} element={<Inicio />} />
        <Route path={urlBasename + '/programa'} element={<Programa />} />
        <Route path={urlBasename + '/actividades'} element={<Actividades />} />
        <Route path={urlBasename + '/actividades/:id'} element={<ActivityDetail />} />
        <Route path={urlBasename + '/noticias'} element={<Noticias />} />
        <Route path={urlBasename + '/admin'} element={<Admin />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
    <div className="mt-auto">
      <Footer />
    </div>
  </div>
 );
};

export default App;