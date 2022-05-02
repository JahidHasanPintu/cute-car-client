// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcmv5lMDuREo1T3gJWGJNhxSFoWPUTuz8",
  authDomain: "cute-car-inventory.firebaseapp.com",
  projectId: "cute-car-inventory",
  storageBucket: "cute-car-inventory.appspot.com",
  messagingSenderId: "665632287878",
  appId: "1:665632287878:web:1ce481f5095a50e8caf507"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
