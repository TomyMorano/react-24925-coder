import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyhEKq5tIAmMAu6sBWdzMzsShKRjJeDYc",
  authDomain: "react-coder-24925.firebaseapp.com",
  projectId: "react-coder-24925",
  storageBucket: "react-coder-24925.appspot.com",
  messagingSenderId: "1052504084268",
  appId: "1:1052504084268:web:55a95bae9b5fb53c29e689"
};

// Initialize Firebase
const initializeFirebase = initializeApp(firebaseConfig);
// Initialize Firestore
export const firestoreDb = getFirestore(initializeFirebase)