// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYy07OmRkMyL_fJ-NDUAvUjVh0c0-Q93M",
  authDomain: "falconr-3f1e5.firebaseapp.com",
  projectId: "falconr-3f1e5",
  storageBucket: "falconr-3f1e5.appspot.com",
  messagingSenderId: "939996567044",
  appId: "1:939996567044:web:df7d804f6fc473f58c0751",
  measurementId: "G-C4NGH36S24",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
