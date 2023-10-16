import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findActivityById } from '../api/firebase_actions';

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
  <div className="relative h-[300px] md:h-[450px]">
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
          <h4 className="font-dmsans font-regular text-white text-center">
            {activity.descripcion.replace(/<\/?p>/g, '')}
          </h4>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default ActivityDetail;