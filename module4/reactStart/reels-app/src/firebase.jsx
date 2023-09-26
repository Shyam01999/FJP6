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
    apiKey: "AIzaSyDOraYiYInpaU8_xEJ6_ZsLZxyIEONCltA",
    authDomain: "reels-2309b.firebaseapp.com",
    projectId: "reels-2309b",
    storageBucket: "reels-2309b.appspot.com",
    messagingSenderId: "703836487422",
    appId: "1:703836487422:web:0b93599769a731dc346faf"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();

export const database = {
  users:firestore.collection('users'),
  posts:firestore.collection('posts'),
  comments:firestore.collection('comments'),  
  getTimeStamp:firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage();

