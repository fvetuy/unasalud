import React, { useState, useEffect } from 'react';
import { readAllNews } from '/src/api/firebase_actions';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import DOMPurify from 'dompurify';
import styles from '../style';

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [currentNoticiaIndex, setCurrentNoticiaIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const noticiasData = await readAllNews();
        setNoticias(noticiasData);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, []);

  const changeSelectedNoticia = (next) => {
    if (next && currentNoticiaIndex < noticias.length - 1) {
      setCurrentNoticiaIndex(currentNoticiaIndex + 1);
    } else if (!next && currentNoticiaIndex > 0) {
      setCurrentNoticiaIndex(currentNoticiaIndex - 1);
    }
  };

  const currentNoticia = noticias[currentNoticiaIndex];

  return (
    <div>
      {isLoading && (
        <div className="flex justify-center items-center h-[80vh]">
          <div className="loader"></div>
        </div>
      )}

      {error && (
        <div className="text-center flex justify-center items-center h-[500px]">
          Lo sentimos, ha ocurrido un error al cargar las noticias. Prueba de nuevo o reintenta más tarde.
        </div>
      )}

      {currentNoticia && !isLoading && !error && (
        <div className="flex flex-col w-screen">
          <div className="relative h-[300px] md:h-[450px]">
            <img
              className="w-full h-full object-cover relative"
              src={currentNoticia.imagenURL}
              alt={`...`}
            />
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/80 to-black/0"></div>
            {
              noticias.length > 1 
              ? 
              <div className="absolute bottom-10 md:bottom-20 flex flex-row justify-between w-full px-6 sm:px-16">
                <button onClick={() => changeSelectedNoticia(false)}>
                  <FiChevronLeft size={22} color="#ffffff" />
                </button>
                <h2 className="font-dmsans text-[25px] md:text-[35px] font-regular text-white text-center">
                  {currentNoticia.titulo}
                </h2>
                <button onClick={() => changeSelectedNoticia(true)}>
                  <FiChevronRight size={22} color="#ffffff" />
                </button>
              </div> 
              : 
              <div className="absolute bottom-10 md:bottom-20 flex flex-row justify-center w-full px-6 sm:px-16">
                <h2 className="font-dmsans text-[25px] md:text-[35px] font-regular text-white text-center">
                  {currentNoticia.titulo}
                </h2>
              </div> 
            }
          </div>
          <div className={`mt-10 ${styles.marginX}`}>
           <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(currentNoticia.descripcion)}} className={`font-dmsans text-[16px]`}></div>
           <div className='w-full h-[130px]'></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Noticias;
   