import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDI42raShQFxjFIBFp_nrSQf89R7-IVzys",
  authDomain: "start-bb9b2.firebaseapp.com",
  projectId: "start-bb9b2",
  storageBucket: "start-bb9b2.appspot.com",
  messagingSenderId: "603162467860",
  appId: "1:603162467860:web:12dd851734796e4e61d101",
  measurementId: "G-MD91BHZNYH",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
