import { initializeApp } from "/firebase/app";
import { getFirestore } from "/firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBlzzBYLsJ_hrOvIB_X4SCpnl_31i-RP6A",
  authDomain: "bookime-38af1.firebaseapp.com",
  projectId: "bookime-38af1",
  storageBucket: "bookime-38af1.appspot.com",
  messagingSenderId: "649459719619",
  appId: "1:649459719619:web:829f6c3ff843bad7e8f176",
  measurementId: "G-BESH9004QK"
});

// Initialize Firebase
const db = getFirestore();