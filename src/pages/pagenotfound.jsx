import React from 'react';
import styles from '../style';

const PageNotFound = () => {
  const containerStyle = {
    height: '75vh', // Set the height to 90% of the viewport height
  };

  return (
    <div className={`${styles.marginX} mt-5 flex flex-col items-center justify-center `} style={containerStyle}>
      <h1 className={`${styles.h3text} mb-4 text-center`}>404 - Página no encontrada</h1>
      <p className={`${styles.ptext} text-black text-center`}>{process.env.PUBLIC_URL}</p>
    </div>
  );
};

export default PageNotFound;
