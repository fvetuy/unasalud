import React from 'react'
import styles from './style';
import { Route, Routes } from 'react-router-dom';
import { Inicio, Programa, Actividades, Noticias } from './pages';
import { NavBar, Footer } from './components';

const EInicio = () => <Inicio/> 
const EPrograma = () => <Programa/> 
const EActividades = () => <Actividades/> 
const ENoticias = () => <Noticias/> 

const App = () => (
  <div className='bg-white w-full overflow-hidden'>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}> 
      <div className={`${styles.boxWidth}`}>
        <NavBar/>
      </div>
    </div>

    <Routes>
        <Route path='/' element={ <EInicio /> }/>
        <Route path='/programa' element={<EPrograma />}/>  
        <Route path='/actividades' element={<EActividades />}/>
        <Route path='/noticias' element={<ENoticias />}/>
    </Routes>

    <div className={`mb-0`}>
      <Footer/>
    </div>
      
  </div>
)

export default App