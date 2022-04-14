import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQsO6LcOt4vpCptOpCEIacXHmao4TpJBk",
  authDomain: "mymoney-a40d6.firebaseapp.com",
  projectId: "mymoney-a40d6",
  storageBucket: "mymoney-a40d6.appspot.com",
  messagingSenderId: "846810288697",
  appId: "1:846810288697:web:6c0814fa69aae7eb52f3e8",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
