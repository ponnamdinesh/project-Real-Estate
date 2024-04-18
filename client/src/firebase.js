// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-bc6ea.firebaseapp.com",
  projectId: "realestate-bc6ea",
  storageBucket: "realestate-bc6ea.appspot.com",
  messagingSenderId: "202424185141",
  appId: "1:202424185141:web:c48dc12e12350b726b5c7c",
  measurementId: "G-B94QP97SXR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
