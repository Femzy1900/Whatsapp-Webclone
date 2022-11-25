import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyB_dYweOjlxfUhJLsfjeqFFYNY8wpSvrmw",
    authDomain: "what-sapp-9a6c0.firebaseapp.com",
    projectId: "what-sapp-9a6c0",
    storageBucket: "what-sapp-9a6c0.appspot.com",
    messagingSenderId: "602448358643",
    appId: "1:602448358643:web:cadbd8b5a312fc1dfd5b86",
    measurementId: "G-7M009PW0TM"
  });

const auth = firebaseConfig.auth();
const db = firebaseConfig.firestore();


export { auth, db };