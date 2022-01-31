// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3oTkW9nZh7hiPbQ4tvTyVreTof-i2RCQ",
    authDomain: "emazonbyhasib.firebaseapp.com",
    projectId: "emazonbyhasib",
    storageBucket: "emazonbyhasib.appspot.com",
    messagingSenderId: "775816813440",
    appId: "1:775816813440:web:2cb2a964dec2955449bf65"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth }