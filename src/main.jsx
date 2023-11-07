import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Inicio, Programa, Actividades, ActivityDetail, Noticias, Admin, PageNotFound } from './pages';

const router = createBrowserRouter([
  {
    path: '/una-salud/',
    element: <App />,
    children: [
      {
        path: '/una-salud/',
        element: <Inicio />,
      },
      {
        path: '/una-salud/programa',
        element: <Programa />,
      },
      {
        path: '/una-salud/actividades',
        element: <Actividades />,
      },
      {
        path: '/una-salud/noticias',
        element: <Noticias />,
      },
      {
        path: '/una-salud/admin',
        element: <Admin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Suspense fallback={<div className="flex justify-center items-center h-screen">
      <div className="loader"></div>
    </div>}>
      {router}
    </Suspense>
  </BrowserRouter>
);