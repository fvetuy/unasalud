import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {FirebaseAppProvider} from 'reactfire';
import firebaseConfig from './api/firebase_config.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  </BrowserRouter>,
)