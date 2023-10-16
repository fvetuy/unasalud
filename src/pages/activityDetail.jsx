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

    <div>
      <img src={activity.imagenURL} alt="" />
      <h1>{activity.titulo}</h1>
      <p>{activity.descripcion}</p>
      {/* Mostrar otros detalles de la actividad */}
    </div>
  );
};

export default ActivityDetail;