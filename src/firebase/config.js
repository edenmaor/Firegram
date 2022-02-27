//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import  firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJGoD6nIyvFuuPMD3qo5K7TlvAObr8HEE",
  authDomain: "firgram-photo-gallery.firebaseapp.com",
  projectId: "firgram-photo-gallery",
  storageBucket: "firgram-photo-gallery.appspot.com",
  messagingSenderId: "1007798264167",
  appId: "1:1007798264167:web:7c903cbd088a6f1ccc0fc2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFirestore, projectStorage, timestamp};