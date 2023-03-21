// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";
import { store } from "@/src/state/store";
import { clearUserInfo, updateUserInfo } from "@/src/state/slices/userSlice";

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
export const App = initializeApp(firebaseConfig);
export const Auth = getAuth(App);
export const Db = getFirestore(App);

onAuthStateChanged(Auth, (user) => {
  if (user) {
    store.dispatch(updateUserInfo());
  } else {
    store.dispatch(clearUserInfo());
  }
});
