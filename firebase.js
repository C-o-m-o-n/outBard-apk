
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD_iUZVvMVbKRzbAID6VFTFJjF96a3-ye4",
  authDomain: "outbard.firebaseapp.com",
  projectId: "outbard",
  storageBucket: "outbard.appspot.com",
  messagingSenderId: "622329613273",
  appId: "1:622329613273:web:2633166cf75c38e975e7c8",
  measurementId: "G-F7LSMG1PXT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);

