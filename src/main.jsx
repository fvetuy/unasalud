import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { Inicio, Programa, Actividades, ActivityDetail, Noticias, Admin, PageNotFound } from './pages';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
      <Routes>
       <Route path="/" element={<App/>}>
        <Route index element={<Inicio/>}></Route>
        <Route path="programa" index element={<Programa/>}></Route>
        <Route path="actividades" index element={<Actividades/>}></Route>
        <Route path="actividades/:id" index element={<ActivityDetail/>}></Route>
        <Route path="noticias" index element={<Noticias/>}></Route>
        <Route path="admin" index element={<Admin/>}></Route>
        <Route path="*" index element={<PageNotFound/>}></Route>
       </Route>
      </Routes>
    </HashRouter>
);
