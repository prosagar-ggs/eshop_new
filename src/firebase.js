import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDGdAft5uP8EixigZgIITcyx4G9mwYaJUI",
    authDomain: "eshop-d2b9c.firebaseapp.com",
    projectId: "eshop-d2b9c",
    storageBucket: "eshop-d2b9c.appspot.com",
    messagingSenderId: "313799058313",
    appId: "1:313799058313:web:1738d3b5738175a7d9f758",
    measurementId: "G-Y81C9L2SFL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
