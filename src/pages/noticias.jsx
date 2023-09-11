import React, { useState, useEffect } from 'react';
import { readAllNews } from '/src/api/firebase_actions';
import NewData from '../api/models/new';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [noticiaQueMostrar, setNoticiaQueMostrar] = useState(new NewData());

  const [isLoading, setIsLoading] = useState(true);
  const [selectedNoticia, setSelectedNoticia] = useState(0);
  const [errorAlCargar, setErrorAlCargar] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const noticiasData = await readAllNews();
        setNoticias(noticiasData);
        setNoticiaQueMostrar(noticiasData[0]);
        setIsLoading(false);
        setErrorAlCargar(false);
      } catch (error) {
        setIsLoading(false);
        setErrorAlCargar(true);
      }
    };

    fetchData();
  }, []);

  const changeSelectedNoticia = (nextNoticia) => {
    if (nextNoticia && selectedNoticia < 10) {
      setSelectedNoticia(selectedNoticia + 1);
    } else if (!nextNoticia && selectedNoticia > 0) {
      setSelectedNoticia(selectedNoticia - 1);
    } 
    setNoticiaQueMostrar(noticias[selectedNoticia]);
  };

  return (
    <div>
      <div className={`flex justify-center items-center h-[600px] ${isLoading ? 'block' : 'hidden'}`}>
        <div className='loader'></div>
      </div>

      <div className={`text-center flex justify-center items-center h-[600px] ${errorAlCargar ? 'block' : 'hidden'}`}>
        Lo sentimos, ha ocurrido un error al cargar las noticias. Prueba de nuevo o reintenta más tarde.
      </div>

      <div className={`flex flex-col ${!isLoading && !errorAlCargar ? 'block' : 'hidden'} w-screen `}>
        <div className="relative h-[300px] md:h-[450px] ">
        <img
          className="w-full h-full object-cover relative"
          src={noticiaQueMostrar.imagen}
          alt="program-header-image"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
          }}
        />
          <div className="absolute bottom-10 md:bottom-20 flex flex-row justify-between w-full px-6 sm:px-16">
          <button onClick={() => changeSelectedNoticia(true)}>
              <FiChevronLeft size={22} color='#ffffff'/>
            </button>
            <h1 className="font-dmsans text-[25px] md:text-[35px] font-semibold text-white text-center">{noticiaQueMostrar.titulo}</h1>
            <button onClick={() => changeSelectedNoticia(true)}>
              <FiChevronRight size={22} color='#ffffff'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noticias;