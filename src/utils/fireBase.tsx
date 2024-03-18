// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB09k60E7Of5O-knEUrjV_1VhGNDk6CYsc",
  authDomain: "netfilgpt.firebaseapp.com",
  projectId: "netfilgpt",
  storageBucket: "netfilgpt.appspot.com",
  messagingSenderId: "381048295863",
  appId: "1:381048295863:web:55673741d53d17542a1832",
  measurementId: "G-LQVRRF6KRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();