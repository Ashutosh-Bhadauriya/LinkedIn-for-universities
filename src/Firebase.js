import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaalb7J6ck4Lf1s5ctbRxTxCacqw-YBmY",
  authDomain: "linkedin-for-universities.firebaseapp.com",
  projectId: "linkedin-for-universities",
  storageBucket: "linkedin-for-universities.appspot.com",
  messagingSenderId: "317587433236",
  appId: "1:317587433236:web:41f4a38491279529d80401",
  measurementId: "G-X9QDPE3YP4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
