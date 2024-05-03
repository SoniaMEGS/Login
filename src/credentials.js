// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpRPGwQXA1JGCi-STNCyAPo0WrSI-jfWc",
  authDomain: "login-fa16f.firebaseapp.com",
  projectId: "login-fa16f",
  storageBucket: "login-fa16f.appspot.com",
  messagingSenderId: "1078232439610",
  appId: "1:1078232439610:web:abd9bbb677e3705c5ace03",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
