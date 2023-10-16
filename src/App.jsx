import React, { useEffect } from 'react';
import styles from './style';
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import { Inicio, Programa, Actividades, ActivityDetail, Noticias, Admin, PageNotFound } from './pages';
import { NavBar, Footer } from './components';

const App = () => {
  return (
    <div className="w-full overflow-hidden" style={{backgroundImage: "url(\"../src/assets/background_texture.png",  backgroundSize: "cover", backgroundAttachment: "fixed"} }>
      <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/programa" element={<Programa />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/actividades/:id" element={<ActivityDetail />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>


      <div className={`mb-0 mt-2`}>
        <Footer />
      </div>
    </div>
  );
};

export default App;