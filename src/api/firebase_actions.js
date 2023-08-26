import { getFirestore, collection, addDoc } from 'firebase/firestore';
import NewData from './models/new';
import ActivityData from './models/activity';

// Obtener referencia a la base de datos
const db = getFirestore();

// Leer noticia
export const readNew = async (newId) => {
  try {
    const docRef = doc(db, 'actividades', documentId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const { titulo, descripcion, imagen, fecha } = docSnapshot.data();
      return new NewData(titulo, descripcion, imagen, fecha);
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

// Leer noticia
export const readActivity = async (activityId) => {
  try {
    const docRef = doc(db, 'actividades', activityId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const { titulo, descripcion, imagen, fecha, categoria} = docSnapshot.data();
      return new ActivityData(titulo, descripcion, imagen, fecha, categoria);
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};