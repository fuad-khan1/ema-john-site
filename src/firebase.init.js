// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeZm20Rt9BIQlC8IbFvfQMV6Ar71PoAug",
  authDomain: "ema-john-simple-10016.firebaseapp.com",
  projectId: "ema-john-simple-10016",
  storageBucket: "ema-john-simple-10016.appspot.com",
  messagingSenderId: "1081920527354",
  appId: "1:1081920527354:web:f2770dfc09fcd867ed6243"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;