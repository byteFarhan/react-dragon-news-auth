// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLBdkyuc4wnAhXLRce4rX1_R-jnrRYoS0",
  authDomain: "react-dragon-news-auth-7e356.firebaseapp.com",
  projectId: "react-dragon-news-auth-7e356",
  storageBucket: "react-dragon-news-auth-7e356.appspot.com",
  messagingSenderId: "454832000354",
  appId: "1:454832000354:web:4573d78526a106b1c8303b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
