import React, { useState, useEffect } from 'react';
import styles from '../style';
import { readActivitiesByCategory } from '../api/firebase_actions';
import DOMPurify from 'dompurify';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';


const Actividades = () => {
  const [currentCategory, setCurrentCategory] = useState('educacion');
  const [isLoadingActivities, setIsLoadingActivities] = useState(false);
  const [activitiesToShow, setActivitiesToShow] = useState([]);
  const [activitiesError, setActivitiesError] = useState(null);

  const loadActivities = async (filter = 'educacion') => {
    try {
      setIsLoadingActivities(true);
      setCurrentCategory(filter);
      const activities = await readActivitiesByCategory(filter);
      setActivitiesToShow(activities);``
      setActivitiesError(null);
      setIsLoadingActivities(false);
    } catch (error) {
      setActivitiesToShow([]);
      setActivitiesError('Ocurrió un error al cargar las actividades');
      setIsLoadingActivities(false);
    }
  };

  useEffect(() => {
    loadActivities();
  }, []);

  const changeCurrentCategory = (newCategory) => {
    if (newCategory !== currentCategory) {
      setCurrentCategory(newCategory);
      loadActivities(newCategory);
    }
  };

  return (
    <div>
      {activitiesError ? (
        <div className='flex flex-col w-full items-center'>
          <p className={`text-[17px] mt-4 mb-4 rounded-md text-[#ff5454]`}>{activitiesError}</p>
          <button onClick={() => setActivitiesError(null)}>
            <p className='underline'>Volver a intentar</p>
          </button>
        </div>
      ) : (
        isLoadingActivities ? (
          <div className="flex justify-center items-center h-[80vh]">
          <div className="loader"></div>
        </div>
        ) : (
          <div>
            <div className='flex flex-col justify-center mt-8 mb-20 '>
              <div className={`flex items-center justify-between flex-row ${styles.marginX} max-w-[400px]`}>
                <button
                  className={`p-2 px-4 mr-3 rounded-3xl text-center ${currentCategory === 'educacion' ? 'bg-cyan-600 text-white' : 'bg-white'}`}
                  onClick={() => changeCurrentCategory('educacion')}
                >
                  Educación
                </button>
                <button
                  className={`p-2 px-4 mr-3 rounded-3xl text-center ${currentCategory === 'investigacion' ? 'bg-cyan-600 text-white' : 'bg-white'}`}
                  onClick={() => changeCurrentCategory('investigacion')}
                >
                  Investigación
                </button>
                <button
                  className={`p-2 px-4 rounded-3xl text-center ${currentCategory === 'extension' ? 'bg-cyan-600 text-white' : 'bg-white'}`}
                  onClick={() => changeCurrentCategory('extension')}
                >
                  Extensión
                </button>
              </div>
            </div>
            <section id='muestraActividades' className={`flex justify-center items-center flex-col sm:flex-row flex-wrap sm:mb-20 mb-10 ${styles.marginX}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {activitiesToShow.length <= 0 ? (
              <p className={`text-[17px] mt-36 mb-96 rounded-md`}>No hay actividades para mostrar..</p>
) : (
        activitiesToShow.map((activityData) => (
<div key={activityData.id} className='mb-6 xs:mb-10'>
  <a href={`/actividades/${activityData.id.toLowerCase()}`}>
    <div className="flex sm:justify-normal md:justify-normal justify-center items-center">
      <div className="min-w-22 h-full">
        <LazyLoad height={200} once placeholder={<div className="placeholder" style={{ height: '200px' }} />} >
          <img className='rounded-xl object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80' src={activityData.imagenURL} alt={`...`} />
        </LazyLoad>
        <h4 className={`${styles.h3text} self-auto xs:mb-2 xs:pl-0 xs:p-5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`}>
          {activityData.titulo.slice(0, 20).toString()}
        </h4>
        <p className={`${styles.ptext} font-poppins font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-normal text-black self-auto`} dangerouslySetInnerHTML={{ __html: activityData.descripcion.slice(0, 99)}}></p>
    <button className="text-black bg-transparent border-none md:text-[18px] sm:text-[16px] mt-6"><Link to={`/actividades/${activityData.id.toLowerCase()}`}>Más info</Link></button>
      </div>
    </div>
  </a>
</div>
        ))
)}
</div>
</section>
          </div>
        )
      )}
    </div>
  );
};

export default Actividades;