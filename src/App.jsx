import React, { useEffect } from 'react';
import styles from './style';
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import { Inicio, Programa, Actividades, ActivityDetail, Noticias, Admin, PageNotFound } from './pages';
import { NavBar, Footer } from './components';
import backgroundTexture from './assets/background_texture.jpg'; // Import the background image

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
        <Route path={process.env.PUBLIC_URL + '/'} element={<Inicio />} />
        <Route path={process.env.PUBLIC_URL + '/programa'} element={<Programa />} />
        <Route path={process.env.PUBLIC_URL + '/actividades'} element={<Actividades />} />
        <Route path={process.env.PUBLIC_URL + '/actividades/:id'} element={<ActivityDetail />} />
        <Route path={process.env.PUBLIC_URL + '/noticias'} element={<Noticias />} />
        <Route path={process.env.PUBLIC_URL + '/admin'} element={<Admin />} />
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