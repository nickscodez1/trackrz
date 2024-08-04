// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvr5VFdwLn6HaDiStMDUerz_EYTjsUCYw",
  authDomain: "inventory-management-app-25f34.firebaseapp.com",
  projectId: "inventory-management-app-25f34",
  storageBucket: "inventory-management-app-25f34.appspot.com",
  messagingSenderId: "958113451113",
  appId: "1:958113451113:web:c19053bdbd78e534ca26f8",
  measurementId: "G-FLS88K0Z8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db as Firestore, storage };
