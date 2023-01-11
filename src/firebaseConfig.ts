import firebase from "firebase";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB1JvbzzD2zPmwLFP6Ta2hksJ8LLDDiXZg",
    authDomain: "primeirotestefirebase-5c95b.firebaseapp.com",
    projectId: "primeirotestefirebase-5c95b",
    storageBucket: "primeirotestefirebase-5c95b.appspot.com",
    messagingSenderId: "1058364958718",
    appId: "1:1058364958718:web:abc2e3f501c2838320c2af"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore()

