// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJMk_1p3NGU_VStWxGg7miTGlULG8rgkQ",
  authDomain: "una-salud-6c316.firebaseapp.com",
  projectId: "una-salud-6c316",
  storageBucket: "una-salud-6c316.appspot.com",
  messagingSenderId: "430339610758",
  appId: "1:430339610758:web:f5c813f3963d836c031907",
  measurementId: "G-1EYG2MNTK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;