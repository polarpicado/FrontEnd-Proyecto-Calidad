// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import getAuth from 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ-S62pc-tROXDGBHrZhDX16CuHovJHAY",
  authDomain: "auth-b86ed.firebaseapp.com",
  projectId: "auth-b86ed",
  storageBucket: "auth-b86ed.appspot.com",
  messagingSenderId: "111035842895",
  appId: "1:111035842895:web:dc6c431b3235b1d72f853a",
  measurementId: "G-TWJ773TT83"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const auth = getAuth(app);
export {app,googleAuthProvider,auth}