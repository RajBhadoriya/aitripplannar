// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEegsPE5VwfDbkoroEMvl63UbZ-3LkhK4",
  authDomain: "ai-trip-plannar.firebaseapp.com",
  projectId: "ai-trip-plannar",
  storageBucket: "ai-trip-plannar.appspot.com",
  messagingSenderId: "137609099520",
  appId: "1:137609099520:web:29bab22a42fef30fa45be5",
  measurementId: "G-333TN4X9PY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);