// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mekxus-properties.firebaseapp.com",
  projectId: "mekxus-properties",
  storageBucket: "mekxus-properties.appspot.com",
  messagingSenderId: "665121351142",
  appId: "1:665121351142:web:99aecf11cd848cf0752227"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

