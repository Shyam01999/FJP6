// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRD2rUEel_g_a9TyHQ_ODaXvMaYHlji98",
  authDomain: "fir-app-118b5.firebaseapp.com",
  projectId: "fir-app-118b5",
  storageBucket: "fir-app-118b5.appspot.com",
  messagingSenderId: "897578559316",
  appId: "1:897578559316:web:466e172b0c1b8dce368ac1"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();

export const database = {
  users:firestore.collection('users')
}

export const storage = firebase.storage();

