// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx3TiS24ywbk8Z6XhdxK1ZUm4paCIgX4U",
  authDomain: "react-auth-abaa5.firebaseapp.com",
  projectId: "react-auth-abaa5",
  storageBucket: "react-auth-abaa5.appspot.com",
  messagingSenderId: "847805007791",
  appId: "1:847805007791:web:158918b21e1fc434ee915a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);