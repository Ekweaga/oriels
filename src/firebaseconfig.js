// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import {getAuth} from  "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBji95HeGxcrGzZ9RP-PWjNk4mIA1tvSJ4",
  authDomain: "oriels-a1a71.firebaseapp.com",
  projectId: "oriels-a1a71",
  storageBucket: "oriels-a1a71.appspot.com",
  messagingSenderId: "671432422300",
  appId: "1:671432422300:web:1c066e5bbd0e9d7b200e59",
  measurementId: "G-X2ERTF5H2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectfirestore = getFirestore(app)
const projectstorage = getStorage(app);
const auth = getAuth(app)


export {projectstorage, projectfirestore,auth}


