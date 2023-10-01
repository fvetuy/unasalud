import NewData from './models/new';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, deleteDoc, doc, setDoc, serverTimestamp} from 'firebase/firestore';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'; // Import signInWithEmailAndPassword
import { getStorage, ref, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';

// Initialize Firebase
const config = {
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
const auth = getAuth(); // Initialize Firebase Authentication

export const readAllNews = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'news'));

    const noticiasArray = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      
      const { titulo, descripcion, imagenURL, fecha, id } = data;

      const newData = new NewData({
        titulo: titulo,
        descripcion: descripcion,
        imagenURL: imagenURL,
        fecha: fecha,
        id: id,
      });
      return newData;
    });

    return noticiasArray;
  } catch (error) {
    return [];
  }
};


export const deleteNewById = async (newId) => {
  try {
    const newRef = doc(db, 'news', newId);
    
    const docSnapshot = await getDoc(newRef);
    if (docSnapshot.exists()) {
      console.log("exists");
      await deleteDoc(newRef);

      //delete the image form storage
      const storage = getStorage();
      const storageRef = ref(storage, `newsImages/${newId}`);
      await deleteObject(storageRef);
      
      return true;
    } else {
      console.log("donest");
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};


// Function to log in a user
export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password); // Use signInWithEmailAndPassword from Firebase Auth
    return true; // Login successful
  } catch (error) {
    throw new Error('Login failed. Please check your credentials.'); // Throw an error for handling in the component
  }
};

// Function to check if a user is logged in
export const checkUserLoggedIn = () => {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      resolve(user);
    });
  });
};

// Function to validate the user's access token (admin access)
export const validateUserAdminToken = (user) => {
  return user.uid === '3E9SMvj6wGUqZwBdoH8CwqUAzoz1';
};

export const logout = async () => {
  try {
    await auth.signOut(); // Sign out the current user
  } catch (error) {
    throw new Error('Logout failed. Please try again.'); // Throw an error for handling in the component
  }
};

export const uploadNewWithImage = async (newData, imageFile) => {
  const newId = Date.now().toString();
  const storage = getStorage();
  const storageRef = ref(storage, `newsImages/${newId}`);
  
 
  try {
    // Upload the image to Firebase Storage as bytes
    await uploadBytes(storageRef, imageFile);

    // Get the download URL of the uploaded image
    const imageUrl = await getDownloadURL(storageRef);

    // Add the newData to Firestore with the custom ID
    const newsCollection = collection(db, 'news');
    const newDocRef = doc(newsCollection, newId);
    const newDataToUpload = {
      titulo: newData.titulo,
      descripcion: newData.descripcion,
      imagenURL: imageUrl,
      fecha: serverTimestamp(),
      id: newId,
    };

    await setDoc(newDocRef, newDataToUpload);

    return true; // Upload successful
  } catch (error) {
    console.error(error);
    return false; // Upload failed
  }
};
