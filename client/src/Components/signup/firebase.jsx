// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpcGi_nRaWzTwbGka1F6hkkjV9nZnstOo",
  authDomain: "instagram-otp-gen.firebaseapp.com",
  projectId: "instagram-otp-gen",
  storageBucket: "instagram-otp-gen.appspot.com",
  messagingSenderId: "298375010282",
  appId: "1:298375010282:web:c7b5fb24b233955b114493",
  measurementId: "G-YTYBKLRX4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);