import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9otyXpWTmiYOXv2am1811F0Xf70BFgc0",
  authDomain: "snapchat-clt-yt.firebaseapp.com",
  projectId: "snapchat-clt-yt",
  storageBucket: "snapchat-clt-yt.appspot.com",
  messagingSenderId: "598059181214",
  appId: "1:598059181214:web:5c84957ea794ae8a64878f",
  measurementId: "G-WWYKHY02T6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };