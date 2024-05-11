// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwOgf5NE1V_FJ-7peL_5ZCuFqgWgWoTYs",
  authDomain: "newsportal-with-authentication.firebaseapp.com",
  projectId: "newsportal-with-authentication",
  storageBucket: "newsportal-with-authentication.appspot.com",
  messagingSenderId: "996883108874",
  appId: "1:996883108874:web:84936528f237cb3f1efbf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;