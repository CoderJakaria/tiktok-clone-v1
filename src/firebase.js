import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBXZG0ZMpcLuN1MGWmcXMxjHA1ljoLzEKI",
  authDomain: "tiktok-clone-49d79.firebaseapp.com",
  projectId: "tiktok-clone-49d79",
  storageBucket: "tiktok-clone-49d79.appspot.com",
  messagingSenderId: "417508496209",
  appId: "1:417508496209:web:061907c8645ed162613970",
  measurementId: "G-T2JQZER7P7",
});

export const db = firebaseApp.firestore();
