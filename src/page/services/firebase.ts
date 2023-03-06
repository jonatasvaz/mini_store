// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxIzdAJgNoYCMsTMoOmzBzbMEnB38WfQo",
  authDomain: "store-3e259.firebaseapp.com",
  projectId: "store-3e259",
  storageBucket: "store-3e259.appspot.com",
  messagingSenderId: "779904563084",
  appId: "1:779904563084:web:b50a7ec2b9937ae8ea88a9",
  measurementId: "G-29J6VXBSSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

 export const auth = getAuth(app);