// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,


    // apiKey: "AIzaSyBDUTRxVdC0tfpixGIgG79SM5uVTxgG9Fk",
    // authDomain: "manufacturer-blackmagic-client.firebaseapp.com",
    // projectId: "manufacturer-blackmagic-client",
    // storageBucket: "manufacturer-blackmagic-client.appspot.com",
    // messagingSenderId: "298446938949",
    // appId: "1:298446938949:web:ed31528a13e26a5f6f542c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;