import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findActivityById } from '../api/firebase_actions';
import styles from '../style';
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ActivityDetail = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    const getActivity = async () => {
      const activityData = await findActivityById(id);
      setActivity(activityData);
    };
    getActivity();
  }, [id]);

  if (!activity) {
    return <div>Cargando actividad...</div>;
  }

  return (

<div className="flex flex-col w-screen">
  <section className="relative h-[300px] md:h-[450px]">
    <img
      className="w-full h-full object-cover relative"
      src={activity.imagenURL}
      alt={`...`}
    />
    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/80 to-black/0"></div>
    <div className="mt-20 md:mt-32 sm:mt-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9]">
      <div className="grid-rows-2 grid flow-col gap-4">
        <div>
          <h2 className="font-dmsans text-[25px] md:text-[35px] font-regular text-white text-center">
            {activity.titulo}
          </h2>
        </div>
        <div>
        </div>
      </div>
    </div>
  </section>
  <section className='m-6'>
    <div>
      <h1 className={`mx-16 mt-16 mb-2 ${styles.h3text}`}>¿En qué consiste?</h1>
    <p className=' sm:md:m-20'>{'. ' + activity.descripcion.replace(/<\/?p>/g, '')}</p>  
    </div>
  </section>
    <div className='ml-20 mb-2'>
  <button className={`font-dmsans text-[16px] xs:text-[16px] font-medium leading-[27px] xs:leading-[31px] text-black/80 w-full`}>
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <Link to={`/actividades`} style={{ marginRight: '5px' }}>
        Ver todas las actividades
      </Link>
      <div className='md:mt-[4px] sm:mt-[4px] mt-[3px]'>
      <BsArrowRight/>
      </div>
    </span>
  </button>
</div>
</div>
  );
};

export default ActivityDetail;