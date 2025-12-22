// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASEgkU6HaRlJw7nBPnqFbfxPtYvZfcL1g",
  authDomain: "ladevzo-homepage.firebaseapp.com",
  projectId: "ladevzo-homepage",
  storageBucket: "ladevzo-homepage.firebasestorage.app",
  messagingSenderId: "537901340316",
  appId: "1:537901340316:web:a4c42e7072e75d79be7f59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and Export Firestore
export const db = getFirestore(app);