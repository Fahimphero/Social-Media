// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbgXEDlvzXrzhcW24K7jTv2FhcLo5YZKU",
    authDomain: "social-media-a7ed7.firebaseapp.com",
    projectId: "social-media-a7ed7",
    storageBucket: "social-media-a7ed7.appspot.com",
    messagingSenderId: "343603675414",
    appId: "1:343603675414:web:ecb2d8f9f2cd16de60d037"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;