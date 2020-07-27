import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgdMmG0yCKbkcBMSe2LUv-1BBfA0u5l64",
  authDomain: "cart-95b0d.firebaseapp.com",
  databaseURL: "https://cart-95b0d.firebaseio.com",
  projectId: "cart-95b0d",
  storageBucket: "cart-95b0d.appspot.com",
  messagingSenderId: "30521042264",
  appId: "1:30521042264:web:3e2abacd6198f898e9b12d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
