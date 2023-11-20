import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHnk9yoge64gI-gKifbayA0U03wyhhqgI",
  authDomain: "fig-template-a76da.firebaseapp.com",
  projectId: "fig-template-a76da",
  storageBucket: "fig-template-a76da.appspot.com",
  messagingSenderId: "321041048415",
  appId: "1:321041048415:web:c241d317f68ccab85e8cea",
  measurementId: "G-GKMLVZM22E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth()

export {app, auth}