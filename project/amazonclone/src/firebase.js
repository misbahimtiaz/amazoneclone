
import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBonN9hN7QRYmpVZvDs4R3_S8-6A71mJ1M",
    authDomain: "eclone-8810e.firebaseapp.com",
    projectId: "eclone-8810e",
    storageBucket: "eclone-8810e.appspot.com",
    messagingSenderId: "1030629887932",
    appId: "1:1030629887932:web:552ef06f1681e63154a5b9",
    measurementId: "G-PX8FC3VSQV"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };