import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDi61lmfItyfpFIAPPK2o9lE2XSVWdJLs",
  authDomain: "flower-detection-1f5df.firebaseapp.com",
  projectId: "flower-detection-1f5df",
  storageBucket: "flower-detection-1f5df.appspot.com",
  messagingSenderId: "773217866114",
  appId: "1:773217866114:web:8b57afdc55d45460afbf9b",
  measurementId: "G-XLNYYYPM1C"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
