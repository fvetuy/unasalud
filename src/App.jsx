import React, { useEffect } from 'react';
import styles from './style';
import { Route, Routes } from 'react-router-dom';
import { Inicio, Programa, Actividades, Noticias, Admin, PageNotFound } from './pages';
import { NavBar, Footer } from './components';

const EInicio = () => <Inicio />;
const EPrograma = () => <Programa />;
const EActividades = () => <Actividades />;
const ENoticias = () => <Noticias />;
const EAdmin = () => <Admin />;
const EPageNotFound = () => <PageNotFound />;

const App = () => {
  return (
    <div className="w-full overflow-hidden" style={{backgroundImage: "url(\"../src/assets/background_texture.png",  backgroundSize: "cover", backgroundAttachment: "fixed"} }>
      <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<EInicio />} />
        <Route path="/programa" element={<EPrograma />} />
        <Route path="/actividades" element={<EActividades />} />
        <Route path="/noticias" element={<ENoticias />} />
        <Route path="/admin" element={<EAdmin />} />
        <Route path="*" element={<EPageNotFound />} />
      </Routes>


      <div className={`mb-0`}>
        <Footer />
      </div>
    </div>
  );
};

export default App;