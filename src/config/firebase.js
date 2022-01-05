// Import the functions you need from the SDKs you need
import app from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4tkWPOTuFOFR2TwVcQmGpWyVSOqmZUk8",
  authDomain: "react-11e43.firebaseapp.com",
  projectId: "react-11e43",
  storageBucket: "react-11e43.appspot.com",
  messagingSenderId: "129293919287",
  appId: "1:129293919287:web:8ef766112c6111e2048bb2"
};

// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore()

export default db
