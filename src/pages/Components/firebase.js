// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // For Realtime Database
import { getFirestore } from "firebase/firestore"; // For Firestore (choose one)

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKd1-PFmFQB4NRUpj83dJwfC7gBPJZQTk",
  authDomain: "wds-response-form-app.firebaseapp.com",
  projectId: "wds-response-form-app",
  storageBucket: "wds-response-form-app.firebasestorage.app",
  messagingSenderId: "619754281569",
  appId: "1:619754281569:web:6ea1918e1db9cce044a820",
  measurementId: "G-431YQRGQPC"
};

const app = initializeApp(firebaseConfig);


export const db = getDatabase(app); 
export const firestore = getFirestore(app); 
