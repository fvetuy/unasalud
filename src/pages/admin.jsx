import React, { useState, useEffect } from 'react';
import { login, checkUserLoggedIn, validateUserAdminToken, logout } from '../api/firebase_actions';
import styles from '../style';
import { AiOutlineMail, AiOutlineLock, AiFillEye, AiOutlineEye } from "react-icons/ai";
import { readAllNews } from '../api/firebase_actions';

const AdminNewsAndActivities = ({ logout }) => { // Pass logout as a prop
  const [adminFilter, setAdminFilter] = useState("noticias");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataToShow, setDataToShow] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    
    const loadNews = async () => {
      try {
        const news = await readAllNews();
        setDataToShow(news);
        
        setError(null);
      } catch (error) {
        setError('Ocurrió un error');
      }
    };
    
    if(adminFilter === "noticias"){
      loadNews();
    }

    setIsLoading(false);
  }, []);

  const handleFilterClick = (filter) => {
    setAdminFilter(filter);
  }

  return (
    <div className={`flex flex-col mt-10 ${styles.marginX}`}>
      <p className={`${styles.h4text}`}>Bienvenido, Admin!</p>
      <div className='flex flex-row mt-5'>
        <button
              className={`p-2 px-6 py-2 rounded-3xl text-center ${adminFilter === 'noticias' ? 'bg-amber-500 text-white' : 'bg-white'}`}
              onClick={() => handleFilterClick('noticias')}
            >
              Noticias
        </button>
        <button
              className={`p-2 px-6 py-2 ml-3 rounded-3xl text-center ${adminFilter === 'actividades' ? 'bg-amber-500 text-white' : 'bg-white'}`}
              onClick={() => handleFilterClick('actividades')}
            >
              Actividades
        </button>
      </div>
      {isLoading 
         ? 
         <div className="flex mt-10">
           <div className="loader"></div>
         </div>
         :
         (error != null || (!(dataToShow.length > 0))
          ? 
          <p className={`text-[17px] mt-4 mb-4 rounded-md text-[#ff5454]`}>Ha ocurrido un error.</p>
          :
          <div className='flex flex-col'>
            {dataToShow.map((data, index) => (
              <div>{data.title}</div>
            ))}
          </div>
         )
       }
      <button className='bg-red-500 p-2 my-10 rounded-md text-white text-[17px] w-[130px]' onClick={() => logout()}> {/* Call the logout function */}
        Cerrar Sesión
      </button>
    </div>
  );
};

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        setIsLoading(true);

        const loggedInUser = await checkUserLoggedIn();

        if (loggedInUser) {
          setIsAdmin(validateUserAdminToken(loggedInUser));
        }

        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    checkLoggedInUser();
  }, []);

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const success = await login(email, password);
      
      setError(null);

      if (success) {
        const loggedInUser = await checkUserLoggedIn();

        if (loggedInUser) {
          setIsAdmin(validateUserAdminToken(loggedInUser));
        }
        setIsLoading(false);
      } else {
        setError('No se ha podido entrar como Admin. Por favor verifica las credenciales');
        setIsLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsAdmin(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAdminUI = () => {
    if (isAdmin) {
      return <AdminNewsAndActivities logout={handleLogout} /> 
    }

    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-[80vh]">
          <div className="loader"></div>
        </div>
      );
    }

    return (
      <form className={`form-group ${styles.marginX} ${styles.marginY}`} onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}>
        <p className={`${styles.h4text} mb-7`}>Ingresa la cuenta de Admin</p>
        <div className="form-group mb-3 flex flwx-row items-center">
          <AiOutlineMail className='mr-2'/>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="E-mail"
            className="input-field py-1 px-2 rounded-md"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="form-group mb-3 flex flwx-row items-center">
          <AiOutlineLock className='mr-2'/>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            placeholder="Contraseña"
            className="input-field py-1 px-2 rounded-md mr-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label type="label" onClick={() => setShowPassword(!showPassword)}>
            <AiOutlineEye className={`${showPassword ? 'hidden' : 'block'}`} size={18}/>
            <AiFillEye className={`${showPassword ? 'block' : 'hidden'}`} size={18}/>
          </label>
        </div>
       
        <div className="form-group">
          <button type="submit" className='bg-amber-500 p-2 mt-5 rounded-md text-white text-[17px]'>
            Iniciar Sesión
          </button>
        </div>
      </form>
    );
  };

  return (
    <div>
      {handleAdminUI()}
      {error && <p className={`text-[17px] ${styles.marginX} mt-4 mb-4 rounded-md text-[#ff5454]`}>{error}</p>}
    </div>
  );
};

export default Admin;
