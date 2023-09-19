import React, { useState, useEffect } from 'react';
import { login, checkUserLoggedIn, validateUserAdminToken, logout } from '../api/firebase_actions';
import styles from '../style';
import ReactDOM from 'react-dom'
import { AiOutlineMail, AiOutlineLock, AiFillEye, AiOutlineEye, AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { readAllNews, deleteNewById, addNew } from '../api/firebase_actions';
import NewData from '../api/models/new';
import ReactQuill from 'react-quill';

const AdminNewsAndActivities = ({ logout }) => { // Pass logout as a prop
  const [adminFilter, setAdminFilter] = useState("noticias");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [newsToShow, setNewsToShow] = useState([new NewData()]);
  const [activitiesToShow, setActivitiesToShow] = useState([]);
  const [isDeletingNew, setIsDeletingNew] = useState(false);

  const [newDataForm, setNewDataForm] = useState({
    titulo: '',
    descripcion: '',
    contenido: '',
    imagenUrl: '', // Para almacenar la URL de la imagen
  });

  const [editorValue, setEditorValue] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDataForm({
      ...newDataForm,
      [name]: value,
    });
  };

  const handleImageUpload = () => {
    // Implement image upload logic here
  };

  useEffect(() => {
    const loadNews = async () => {
      try {
        setIsLoading(true);
        const news = await readAllNews();
        setNewsToShow(news);
        
        setError(null);
        setIsLoading(false);
      } catch (error) {
        setNewsToShow([])
        setError('Ocurrió un error');
      }
    };
    
    if(adminFilter === "noticias"){
      loadNews();
    }
  }, []);


  const handleFilterClick = (filter) => {
    setAdminFilter(filter);
  }
  
  return (
    <div className={`flex flex-col mt-10 ${styles.marginX}`}>
      <p className={`${styles.h4text}`}>Bienvenido, Admin!</p>
      <div className='flex flex-row mt-5'>
        <button
              className={`p-2 px-6 py-2 rounded-3xl text-center ${adminFilter === 'noticias' ? 'bg-cyan-600 text-white' : 'bg-white'}`}
              onClick={() => handleFilterClick('noticias')}
            >
              Noticias
        </button>
        <button
              className={`p-2 px-6 py-2 ml-3 rounded-3xl text-center ${adminFilter === 'actividades' ? 'bg-cyan-600 text-white' : 'bg-white'}`}
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
         (
          adminFilter == "noticias" ? 
          (error != null || (!(newsToShow.length > 0))
          ? 
            <p className={`text-[17px] mt-4 mb-4 rounded-md text-[#ff5454]`}>Ha ocurrido un error.</p>
          :
            <div className='flex flex-col mt-4'>
              {newsToShow.map((newData, index) => (
              <div key={newData.id} className='flex flex-row items-center'>
                <div className='flex flex-row w-full bg-white my-2 p-3 sm:p-7 rounded-md sm:rounded-xl'>
                  <img className="w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] object-cover rounded-md" src={newData.imagen} alt={`logo-${newData.title}`} />
                  <div className='flex flex-col ml-3 sm:ml-5'>
                    <p className={`font-dmsans text-[16px] xs:text-[18px] font-medium leading-[27px] xs:leading-[31px] text-zinc-700 line-clamp-1 sm:line-clamp-2`}>{newData.titulo}</p>
                    <p className={`${styles.ptext} line-clamp-2 sm:line-clamp-3`}>{newData.descripcion}</p>
                  </div>
                </div>
                <button className={`h-[30px] w-[30px] rounded-full bg-red-500 ml-2 items-center justify-center ${isDeletingNew ? 'hidden' : 'flex'}`} onClick={() => {
                  setIsLoading(true);
                  const success = deleteNewById(newData.id)
                  if(success)
                  {
                    setIsLoading(false);
                  }
                }}>
                  <AiFillDelete color='#FFDCDC' />
                </button>
              </div>
              ))}
               
               <div className='flex flex-row items-center w-full'>
                <input
                    id="titulo"
                    name="titulo"
                    type="text"
                    required
                    value={newDataForm.titulo}
                    placeholder="Título"
                    className="mt-3 p-1"
                    onChange={handleInputChange}
                    maxLength={40}
                />

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className={`mt-3`}
                />

               </div>
                <button className='bg-green-400 p-2 my-5 rounded-md text-white text-[17px] w-[155px]' onClick={() => toogleNewPopup()}> {/* Call the logout function */}
                 <div className='flex flex-row items-center justify-between'>
                  <AiOutlinePlus/>
                  Agregar noticia
                 </div>
                 </button>
            </div>
          ) : 
            <div>Actividades</div>
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
          <button type="submit" className='bg-cyan-600 p-2 mt-5 rounded-md text-white text-[17px]'>
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
