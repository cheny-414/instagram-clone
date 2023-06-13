import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBSddyLuQONST-6LNpa33rt6Oyj15iiGcA",
    authDomain: "instagram-clone-957b7.firebaseapp.com",
    projectId: "instagram-clone-957b7",
    storageBucket: "instagram-clone-957b7.appspot.com",
    messagingSenderId: "850226523299",
    appId: "1:850226523299:web:2a9420bd05e900607b6316",
    measurementId: "G-RNHMWP9WR1"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };