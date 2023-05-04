import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1K1LiO-UvExji7dRa44uQgefnqtIknr0",
  authDomain: "photo-gallery-6c599.firebaseapp.com",
  projectId: "photo-gallery-6c599",
  storageBucket: "photo-gallery-6c599.appspot.com",
  messagingSenderId: "190212694914",
  appId: "1:190212694914:web:725e517a9cb1f8c6e4a59b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };