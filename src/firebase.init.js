// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNC3-M3scv1qD7_i_HLtxSryHaTqKIVpQ",
  authDomain: "alumni-association-4e4ae.firebaseapp.com",
  projectId: "alumni-association-4e4ae",
  storageBucket: "alumni-association-4e4ae.appspot.com",
  messagingSenderId: "188401664774",
  appId: "1:188401664774:web:38d37e10a79059f09a5487"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
export default auth;