import React, { useState, useEffect } from 'react';
import styles from '../style';
import { readActivitiesByCategory } from '../api/firebase_actions';
import DOMPurify from 'dompurify';

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
      setActivitiesToShow(activities);
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
      <div className='my-4 '>
        <div className={`flex items-center justify-between flex-row ${styles.marginX} max-w-[400px]`}>
          <button
            className={`p-2 px-6 py-2 rounded-3xl text-center ${currentCategory === 'educacion' ? 'bg-cyan-600 text-white' : 'bg-white'}`}
            onClick={() => changeCurrentCategory('educacion')}
          >
            Educacion
          </button>
          <button
            className={`p-2 px-6 py-2 rounded-3xl text-center ${currentCategory === 'investigacion' ? 'bg-cyan-600 text-white' : 'bg-white'}`}
            onClick={() => changeCurrentCategory('investigacion')}
          >
            Investigacion
          </button>
          <button
            className={`p-2 px-6 py-2 rounded-3xl text-center ${currentCategory === 'extension' ? 'bg-cyan-600 text-white' : 'bg-white'}`}
            onClick={() => changeCurrentCategory('extension')}
          >
            Extension
          </button>
        </div>
      </div>
      {activitiesError ? (
        <div className='flex flex-col w-full items-start'>
          <p className={`text-[17px] mt-4 mb-4 rounded-md text-[#ff5454]`}>{activitiesError}</p>
          <button onClick={() => setActivitiesError(null)}>
            <p className='underline'>Volver a intentar</p>
          </button>
        </div>
      ) : (
        isLoadingActivities ? (
          <div className="flex justify-center items-center h-[50vh]">
            <div className="loader"></div>
          </div>
        ) : (
          <div>
            <section id='muestraActividades' className={`flex justify-start items-center flex-col sm:flex-row flex-wrap ${styles.marginX}`}>
             <div>
              {activitiesToShow.length <= 0 
              ? (
                <p className={`text-[17px] mt-4 mb-4 rounded-md`}>No hay actividades para mostrar..</p>) 
              : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:px-2'>
                {activitiesToShow.map((activityData) => (
                  <div key={activityData.id} className=''>
                    <div className="flex items-center flex-col">
                      <div className="w-full h-full">
                        <img className='w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] object-cover rounded-md' src={activityData.imagenURL} alt={`...`} />
                        <h4 className={`${styles.h3text} self-auto pl-0 xs:mb-3 xs:pl-0 xs:p-5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`}>
                          {activityData.titulo.slice(0, 20).toString()}
                        </h4>
                      </div>
                    </div>
                    <p className={`${styles.ptext} font-poppins font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-normal text-black self-auto`} dangerouslySetInnerHTML={{ __html: activityData.descripcion.slice(0, 99) + "..." }}></p>
                    <button className="text-black bg-transparent border-none md:text-[18px] sm:text-[16px]"><a href={`${"actividades/" + (activityData.titulo.toLowerCase())}`}>Más info</a></button>
                  </div>
                ))}
                <div className='w-full h-[130px]'></div>
                </div>
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