import React, { useState, useEffect } from 'react';
import { readAllNews } from '/src/api/firebase_actions';

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const noticiasData = await readAllNews();
      setNoticias(noticiasData);
      setIsLoading(false);
    };

    fetchData();
  }, []);


  return (
    <div>
      <h1>Noticias</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        noticias.map((noticia) => (
          <div>
            <h2>{noticia.titulo}</h2>
            <p>{noticia.descripcion}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Noticias;