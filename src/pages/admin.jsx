import React, { useState, useEffect } from 'react';
import { login, checkUserLoggedIn, validateUserAdminToken, logout, uploadNewWithImage, readAllNews, deleteNewById, deleteActivityById, uploadActivityWithImage, readActivitiesByCategory } from '../api/firebase_actions';
import styles from '../style';
import { AiOutlineMail, AiOutlineLock, AiFillEye, AiOutlineEye, AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import NewData from '../api/models/new';
import ActivityData from '../api/models/activity';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { quillModules, quillFormats } from '../constants/index';
import DOMPurify from 'dompurify';

const AdminNewsAndActivities = ({ logout }) => {
  // State variables
  const [adminFilter, setAdminFilter] = useState('noticias');
  const [activityFilterCategory, setActivityFilterCategory] = useState('educacion');
  const [newsError, setNewsError] = useState(null);
  const [activitiesError, setActivitiesError] = useState(null);
  const [isLoadingNews, setIsLoadingNews] = useState(true);
  const [isLoadingActivities, setIsLoadingActivities] = useState(true);
  const [newsToShow, setNewsToShow] = useState([]);
  const [activitiesToShow, setActivitiesToShow] = useState([]);
  const [isDeletingNew, setIsDeletingNew] = useState(false);
  const [isDeletingActivity, setIsDeletingActivity] = useState(false);

  const [newDataForm, setNewDataForm] = useState(new NewData({}));
  const [activityDataForm, setActivityDataForm] = useState({
    categoria: 'educacion',
    titulo: '',
    descripcion: '',
  });
  const [selectedNewImage, setSelectedNewImage] = useState(null);
  const [selectedActivityImage, setSelectedActivityImage] = useState(null);

  // Handle changes in form inputs
  const handleNewTitleChange = (newValue) => {
    setNewDataForm((prevDataForm) => ({ ...prevDataForm, titulo: newValue }));
  };

  const handleNewDescriptionChange = (newValue) => {
    setNewDataForm((prevDataForm) => ({ ...prevDataForm, descripcion: newValue }));
  };

  const handleActivityTitleChange = (newValue) => {
    setActivityDataForm((prevDataForm) => ({ ...prevDataForm, titulo: newValue }));
  };

  const handleActivityDescriptionChange = (newValue) => {
    setActivityDataForm((prevDataForm) => ({ ...prevDataForm, descripcion: newValue }));
  };

  const handleActivityCategoryChange = (newValue) => {
    if (newValue !== activityDataForm.categoria) {
      setActivityDataForm((prevDataForm) => ({ ...prevDataForm, categoria: newValue }));
    }
  };

  const handleNewImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedNewImage(file);
  };

  const handleActivityImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedActivityImage(file);
  };

  // Handle adding a new
  const handleAddNew = async (e) => {
    e.preventDefault();
    setIsLoadingNews(true);

    try {
      setNewsError(null);

      const newNewsData = {
        titulo: newDataForm.titulo,
        descripcion: newDataForm.descripcion,
      };

      if (selectedNewImage === null) {
        setNewsError('Por favor selecciona una imagen');
      } else if (!newDataForm.descripcion) {
        setNewsError('La descripción de la noticia es requerida.');
      } else {
        const success = await uploadNewWithImage(newNewsData, selectedNewImage);
        if (success) {
          setNewDataForm(new NewData({}));
          setSelectedNewImage(null);
          await loadNews();
        } else {
          setNewsError('Ocurrió un Error al agregar la noticia');
        }
      }

      setIsLoadingNews(false);
    } catch (error) {
      setNewsError('Ocurrió un Error al agregar la noticia');
      setIsLoadingNews(false);
    }
  };

  // Handle adding an activity
  const handleAddActivity = async (e) => {
    e.preventDefault();
    setIsLoadingActivities(true);

    try {
      setActivitiesError(null);
      const newActivityData = {
        titulo: activityDataForm.titulo,
        descripcion: activityDataForm.descripcion,
        categoria: activityDataForm.categoria,
      };

      if (selectedActivityImage === null) {
        throw 'Por favor selecciona una imagen';
      } 
      else if (!activityDataForm.descripcion) {
        throw 'La descripción de la actividad es requerida.';
      }

      const success = await uploadActivityWithImage(newActivityData, selectedActivityImage);
      if (success) {
        setActivityDataForm({ categoria: 'educacion', titulo: '', descripcion: '' });
        setSelectedActivityImage(null);
        await loadActivities(activityFilterCategory);
      } else {
        setActivitiesError('Ocurrió un error al agregar la actividad');
      }

      setIsLoadingActivities(false);
    } catch (e) {
      setActivitiesError(e);
      setIsLoadingActivities(false);
    }
  };

  // Load news and activities based on the selected filter
  const loadNews = async () => {
    try {
      setIsLoadingNews(true);
      const news = await readAllNews();
      setNewsToShow(news);
      setNewsError(null);
      setIsLoadingNews(false);
    } catch (error) {
      setNewsToShow([]);
      setNewsError('Ocurrió un error al cargar las noticias');
      setIsLoadingNews(false);
    }
  };

  const loadActivities = async (filter = 'educacion') => {
    try {
      setIsLoadingActivities(true);
      setActivityFilterCategory(filter);
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

  // Fetch news or activities based on the selected filter on component mount
  useEffect(() => {
    if (adminFilter === 'noticias') {
      loadNews();
    } else if (adminFilter === 'actividades') {
      loadActivities();
    }
  }, [adminFilter]);

  // Handle filter change
  const handleFilterClick = (filter) => {
    setAdminFilter(filter);
  };

  return (
    <div className={`flex flex-col mt-10 ${styles.marginX}`}>
      <p className={`${styles.h3text}`}>Bienvenido, Admin!</p>
      <div className='flex flex-row mt-5'>
        <button
          className={`p-2 px-6 py-2 rounded-3xl text-center ${
            adminFilter === 'noticias' ? 'bg-cyan-600 text-white' : 'bg-white'
          }`}
          onClick={() => handleFilterClick('noticias')}
        >
          Noticias
        </button>
        <button
          className={`p-2 px-6 py-2 ml-3 rounded-3xl text-center ${
            adminFilter === 'actividades' ? 'bg-cyan-600 text-white' : 'bg-white'
          }`}
          onClick={() => handleFilterClick('actividades')}
        >
          Actividades
        </button>
      </div>
      {isLoadingNews ? (
        <div className='flex mt-10'>
          <div className='loader'></div>
        </div>
      ) : (
        adminFilter === 'noticias' ? (
          newsError ? (
            <div className='flex flex-col w-full items-start'>
             <p className={`text-[17px] mt-4 mb-4 rounded-md text-[#ff5454]`}>{newsError}</p>
             <button onClick={(a) => {setNewsError(null)}}>
              <p className='underline'>Volver a intentar</p>
             </button>
            </div>
          ) : (
            <div className='flex flex-col mt-4'>
              {!isLoadingNews && newsToShow.length > 0 ? 
                <div></div>
                :<p className={`text-[17px]  mt-4 mb-4 rounded-md]`}>No hay noticias para mostrar..</p>
              }
              
              {newsToShow.map((newData) => (
                <div key={newData.id} className='flex flex-row items-center'>
                  <div className='flex flex-row w-full bg-white my-3 sm:my-7 rounded-md sm:rounded-xl pl-3 py-3'>
                    <img className='w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] object-cover rounded-md' src={newData.imagenURL} alt={`...`} />
                    <div className='flex flex-col ml-3 sm:ml-5'>
                      <p className={`font-dmsans text-[16px] xs:text-[18px] font-medium leading-[27px] xs:leading-[31px] text-zinc-700 line-clamp-1 sm:line-clamp-2`}>{newData.titulo}</p>
                      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(newData.descripcion)}} className={`font-dmsans text-[16px] line-clamp-2 sm:line-clamp-3`}></div>
                    </div>
                  </div>
                  <button
                    className={`h-[30px] w-[30px] rounded-full bg-red-500 ml-2 items-center justify-center ${
                      isDeletingNew ? 'hidden' : 'flex'
                    }`}
                    onClick={async () => {
                      setIsLoadingNews(true);
                      const success = await deleteNewById(newData.id);
                      if (success) {
                        const updatedNewsToShow = newsToShow.filter((singleNew) => singleNew.id !== newData.id);
                        setNewsToShow(updatedNewsToShow);
                      }
                      setIsLoadingNews(false);
                    }}
                  >
                    <AiFillDelete color='#FFDCDC' />
                  </button>
                </div>
              ))}

              <div className='bg-zinc-400 w-full h-[2px] mt-2 mb-6'></div>
              <p className={`${styles.h4text}`}>Agregar nueva noticia</p>
              {selectedNewImage && (
                <img
                  src={URL.createObjectURL(selectedNewImage)}
                  alt="Imagen seleccionada"
                  className="mt-5 mb-2 rounded-md w-full h-[350px] object-cover"
                />
              )}
              <form onSubmit={handleAddNew} id='newForm' className='flex flex-col'>
                <input
                  type='file'
                  accept='image/*'
                  required
                  onChange={handleNewImageChange}
                  id='fileInput'
                  className={`mb-3 mt-5`}
                />
                <input
                  id='titulo'
                  name='titulo'
                  type='text'
                  required
                  value={newDataForm.titulo}
                  placeholder='Título de la noticia (max 60 caracteres)'
                  className='mb-7 mt-3 p-1.5 rounded-md'
                  onChange={(e) => handleNewTitleChange(e.target.value)}
                  maxLength={60}
                />
                <ReactQuill
                  value={newDataForm.descripcion}
                  onChange={handleNewDescriptionChange}
                  required
                  placeholder='Escribe aquí la descripción de la noticia...'
                  modules={quillModules}
                  formats={quillFormats}
                  className='bg-white'
                />
                <button
                  type='submit'
                  className='bg-green-400 p-2 my-5 rounded-md text-white text-[17px] w-[155px]'
                >
                  <div className='flex flex-row items-center justify-between'>
                    <AiOutlinePlus />
                    Agregar noticia
                  </div>
                </button>
              </form>
            </div>
          )
        ) : (
          activitiesError ? (
            <div className='flex flex-col w-full items-start'>
             <p className={`text-[17px] mt-4 mb-4 rounded-md text-[#ff5454]`}>{activitiesError}</p>
             <button onClick={(a) => {setActivitiesError(null)}}>
              <p className='underline'>Volver a intentar</p>
             </button>
            </div>
          ) : (
            (isLoadingActivities ?  <div className='flex mt-10'>
            <div className='loader'></div>
          </div>
             : 
             <div className='flex flex-col mt-4'>
              <div className='mt-2'>
              <label htmlFor="dropdown-filter">Filtrar actividades por categoria:</label>
                <select id="dropdown-filter" value={activityFilterCategory} onChange={(e) => {
                  loadActivities(e.target.value);
                }}>
                <option value="educacion">Educación</option>
                <option value="investigacion">Investigación</option>
                <option value="extension">Extensión</option>
              </select>
             </div>
              {(activitiesToShow.length <= 0 ? <p className={`text-[17px]  mt-4 mb-4 rounded-md]`}>No hay actividades para mostrar..</p> : <div></div>)}
              {activitiesToShow.map((activityData) => (
                <div key={activityData.id} className='flex flex-row items-center'>
                  <div className='flex flex-row w-full bg-white my-3 sm:my-7 rounded-md sm:rounded-xl pl-3 py-3'>
                    <img className='w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] object-cover rounded-md' src={activityData.imagenURL} alt={`...`} />
                    <div className='flex flex-col ml-3 sm:ml-5'>
                      <p className={`font-dmsans text-[16px] xs:text-[18px] font-medium leading-[27px] xs:leading-[31px] text-zinc-700 line-clamp-1 sm:line-clamp-2`}>{activityData.titulo}</p>
                      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(activityData.descripcion)}} className={`font-dmsans text-[16px] line-clamp-2 sm:line-clamp-3`}></div>
                    </div>
                  </div>
                  <button
                    className={`h-[30px] w-[30px] rounded-full bg-red-500 ml-2 items-center justify-center ${
                      isDeletingActivity ? 'hidden' : 'flex'
                    }`}
                    onClick={async () => {
                      setIsLoadingActivities(true);
                      const success = await deleteActivityById(activityData.id);
                      if (success) {
                        const updatedActivitiesToShow = activitiesToShow.filter((singleActivity) => singleActivity.id !== activityData.id);
                        setActivitiesToShow(updatedActivitiesToShow);
                      }
                      setIsLoadingActivities(false);
                    }}
                  >
                    <AiFillDelete color='#FFDCDC' />
                  </button>
                </div>
              ))}
              <div className='bg-zinc-400 w-full h-[2px] mt-2 mb-6'></div>
              <p className={`${styles.h4text}`}>Agregar nueva actividad</p>
              <form onSubmit={handleAddActivity} id='activityForm' className='flex flex-col'>
                <div className='mt-5'>
                  <label htmlFor="dropdown-add">Categoria de la nueva actividad:</label>
                  <select id="dropdown-add" value={activityDataForm.categoria} onChange={(e) => {handleActivityCategoryChange(e.target.value)}}>
                    <option value="educacion">Educación</option>
                    <option value="investigacion">Investigación</option>
                    <option value="extension">Extensión</option>
                  </select>
                </div>
                
                {selectedActivityImage && (
                  <img
                    src={URL.createObjectURL(selectedActivityImage)}
                    alt="Imagen seleccionada"
                    className="mt-5 mb-2 rounded-md w-full h-[350px] object-cover"
                  />
                )}
                <input
                  type='file'
                  accept='image/*'
                  required
                  onChange={handleActivityImageChange}
                  id='fileInputActivity'
                  className={`mb-3 mt-5`}
                />
                <input
                  id='tituloActivity'
                  name='titulo'
                  type='text'
                  required
                  value={activityDataForm.titulo}
                  placeholder='Título de la actividad (max 60 caracteres)'
                  className='mb-7 mt-3 p-1.5 rounded-md'
                  onChange={(e) => handleActivityTitleChange(e.target.value)}
                  maxLength={60}
                />
                <ReactQuill
                  value={activityDataForm.descripcion}
                  onChange={handleActivityDescriptionChange}
                  required
                  id='descActivity'
                  placeholder='Escribe aquí la descripción de la actividad...'
                  modules={quillModules}
                  formats={quillFormats}
                  className='bg-white'
                />
                <button
                  type='submit'
                  className='bg-green-400 p-2 my-5 rounded-md text-white text-[17px] w-[170px]'
                >
                <div className='flex flex-row items-center justify-between'>
                  <AiOutlinePlus />
                  Agregar actividad
                </div>
              </button>
              </form>
            </div>
            )
            
          )
        )
      )}
      <div className='form-group'>
        <button type="submit" className='bg-red-500 p-2 my-10 rounded-md text-white text-[17px] w-[130px]' onClick={() => logout()}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [newsError, setNewsError] = useState(null);
  const [isLoadingNews, setIsLoadingNews] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        setIsLoadingNews(true);
        const loggedInUser = await checkUserLoggedIn();

        if (loggedInUser) {
          setIsAdmin(validateUserAdminToken(loggedInUser));
        }

        setIsLoadingNews(false);
      } catch (newsError) {
        setNewsError(newsError.message);
      }
    };

    checkLoggedInUser();
  }, []);

  const handleLogin = async () => {
    setIsLoadingNews(true);

    try {
      const success = await login(email, password);

      setNewsError(null);

      if (success) {
        const loggedInUser = await checkUserLoggedIn();

        if (loggedInUser) {
          setIsAdmin(validateUserAdminToken(loggedInUser));
        }
      } else {
        setNewsError('No se ha podido entrar como Admin. Por favor verifica las credenciales');
      }

      setIsLoadingNews(false);
    } catch (newsError) {
      setNewsError(newsError.message);
      setIsLoadingNews(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsAdmin(false);
    } catch (newsError) {
      setNewsError(newsError.message);
    }
  };

  const handleAdminUI = () => {
    if (isAdmin) {
      return <AdminNewsAndActivities logout={handleLogout} />;
    }

    if (isLoadingNews) {
      return (
        <div className="flex justify-center items-center h-[80vh]">
          <div className="loader"></div>
        </div>
      );
    }

    return (
      <form
        className={`form-group ${styles.marginX} ${styles.marginY}`}
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
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
      {newsError && <p className={`text-[17px] ${styles.marginX} mt-4 mb-4 rounded-md text-[#ff5454]`}>{newsError}</p>}
    </div>
  );
};

export default Admin;
