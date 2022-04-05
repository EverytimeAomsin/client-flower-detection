import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW7-hQVvWDm4rvOIuAf4UquUaHFWAA4qQ",
  authDomain: "flower-detection-ad21f.firebaseapp.com",
  projectId: "flower-detection-ad21f",
  storageBucket: "flower-detection-ad21f.appspot.com",
  messagingSenderId: "43085399199",
  appId: "1:43085399199:web:86c2b70200ead359388eaa",
  measurementId: "G-SWSXL1XES4"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
