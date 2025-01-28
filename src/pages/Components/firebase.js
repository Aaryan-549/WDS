// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // For Realtime Database
import { getFirestore } from "firebase/firestore"; // For Firestore (choose one)

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOmYuWwTpu_D4bQafjlAi-4MXV0ME1Fks",
  authDomain: "wds09-e6d91.firebaseapp.com",
  databaseURL: "https://wds09-e6d91-default-rtdb.firebaseio.com",
  projectId: "wds09-e6d91",
  storageBucket: "wds09-e6d91.firebasestorage.app",
  messagingSenderId: "626885264348",
  appId: "1:626885264348:web:de2a3e0a4622d0589a4519",
  measurementId: "G-409VWSGFSH"
};

const app = initializeApp(firebaseConfig);


export const db = getDatabase(app); 
export const firestore = getFirestore(app); 
