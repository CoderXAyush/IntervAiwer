// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVMHJ7TQuT3EaUVTrdseeOS2v4hsxglx4",
  authDomain: "intervaiwer.firebaseapp.com",
  projectId: "intervaiwer",
  storageBucket: "intervaiwer.firebasestorage.app",
  messagingSenderId: "974081322121",
  appId: "1:974081322121:web:3d36736caaba27d5ff2a58",
  measurementId: "G-5221K20CGC"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);