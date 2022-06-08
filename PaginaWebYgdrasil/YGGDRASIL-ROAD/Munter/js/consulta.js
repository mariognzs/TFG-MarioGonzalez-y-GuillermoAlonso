import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBHekNCduwuBB7G-w4H2Oh4NlrLcS-shH0",
  authDomain: "yggdrasil-road.firebaseapp.com",
  projectId: "yggdrasil-road",
  storageBucket: "yggdrasil-road.appspot.com",
  messagingSenderId: "72934374536",
  appId: "1:72934374536:web:b2aec9fbbaa91d9124733d",
  measurementId: "G-WPCBB94Q6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
  getFirestore, doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField 
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js';

const db = getFirestore();