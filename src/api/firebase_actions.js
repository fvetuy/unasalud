import { getFirestore, collection, getDocs } from 'firebase/firestore';
import NewData from './models/new';
import { initializeApp } from 'firebase/app';

// Initialize Firebase
export const config = {
  apiKey: "AIzaSyDJMk_1p3NGU_VStWxGg7miTGlULG8rgkQ",
  authDomain: "una-salud-6c316.firebaseapp.com",
  projectId: "una-salud-6c316",
  storageBucket: "una-salud-6c316.appspot.com",
  messagingSenderId: "430339610758",
  appId: "1:430339610758:web:f5c813f3963d836c031907",
  measurementId: "G-1EYG2MNTK5"
};

initializeApp(config);

const db = getFirestore();

const readAllNews = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'news'));

    const noticiasArray = querySnapshot.docs.map((doc) => {
      const { titulo, descripcion, imagen, fecha } = doc.data();
      return new NewData(titulo, descripcion, imagen, fecha);
    });

    return noticiasArray;
  } catch (error) {
    console.error('Error fetching noticias:', error);
    return [];
  }
};

export default readAllNews;