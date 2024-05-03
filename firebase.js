// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn5-3SKUVVA2-pMBhxroMyYourLIE1Di0",
  authDomain: "portfolio-bacf3.firebaseapp.com",
  projectId: "portfolio-bacf3",
  storageBucket: "portfolio-bacf3.appspot.com",
  messagingSenderId: "45848126163",
  appId: "1:45848126163:web:eaae48f00635b7ea7cea26",
  measurementId: "G-14KERMCWG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);