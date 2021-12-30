import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap-icons/font/bootstrap-icons.css";

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzDJvWNq0nu4OjuVRBegcsy4YSArga_FA",
  authDomain: "ecommerce-979ab.firebaseapp.com",
  projectId: "ecommerce-979ab",
  storageBucket: "ecommerce-979ab.appspot.com",
  messagingSenderId: "492494543260",
  appId: "1:492494543260:web:fa8c8fc188084a42a39059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
