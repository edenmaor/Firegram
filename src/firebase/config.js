//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import  firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5I9c462V7rUB13GvsHk3DTexQNhkRfAA",
  authDomain: "fir-9391a.firebaseapp.com",
  projectId: "fir-9391a",
  storageBucket: "fir-9391a.appspot.com",
  messagingSenderId: "417024666311",
  appId: "1:417024666311:web:66773550824155e7b36ce2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFirestore, projectStorage, timestamp};