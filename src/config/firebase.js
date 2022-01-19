// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQY23FOiR2tY3UIbIQ1S-yQuzVoeaDpKg",
  authDomain: "point-cuan.firebaseapp.com",
  projectId: "point-cuan",
  storageBucket: "point-cuan.appspot.com",
  messagingSenderId: "719534152639",
  appId: "1:719534152639:web:84a255761a0524a8b91f0a",
  measurementId: "G-K5WRJ7CBTM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
