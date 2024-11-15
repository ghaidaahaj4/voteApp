// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYnLam9Ah6aOhidWDotsLYX7iTHdNcDeA",
  authDomain: "voting-fbdf3.firebaseapp.com",
  projectId: "voting-fbdf3",
  storageBucket: "voting-fbdf3.firebasestorage.app",
  messagingSenderId: "966856175510",
  appId: "1:966856175510:web:a420bbeb14dce1438bf7b7",
  measurementId: "G-TZXFCQEEM7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
