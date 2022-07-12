import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDXtdfD-Y72MwhLPgs-28vBkJzvFCFODR0",
  authDomain: "tinder-51e1f.firebaseapp.com",
  projectId: "tinder-51e1f",
  storageBucket: "tinder-51e1f.appspot.com",
  messagingSenderId: "459970747737",
  appId: "1:459970747737:web:5f2e98cee4044b6be10048"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

export { auth, db, GoogleAuthProvider, signInWithCredential }