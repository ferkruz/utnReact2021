/*

 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyKGghi15LhO6oIxhgVz-L_y7ULOJlt0I",
  authDomain: "utn2021-9a1e8.firebaseapp.com",
  projectId: "utn2021-9a1e8",
  storageBucket: "utn2021-9a1e8.appspot.com",
  messagingSenderId: "179828380720",
  appId: "1:179828380720:web:9e367bf4d7fd16e7b089f5",
  measurementId: "G-LERQZCXGMR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

*/

import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

//import getAnalytics from "firebase/analytics";

    const firebaseConfig = {
      apiKey: "AIzaSyDyKGghi15LhO6oIxhgVz-L_y7ULOJlt0I",
      authDomain: "utn2021-9a1e8.firebaseapp.com",
      projectId: "utn2021-9a1e8",
      storageBucket: "utn2021-9a1e8.appspot.com",
      messagingSenderId: "179828380720",
      appId: "1:179828380720:web:9e367bf4d7fd16e7b089f5",
      measurementId: "G-LERQZCXGMR"
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.db = firebase.firestore()
firebase.auth = firebase.auth()

//const analytics = getAnalytics(app);

export default firebase