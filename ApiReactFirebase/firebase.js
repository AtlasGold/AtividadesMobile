import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFoEUILK3m1Zncodka98gT56QG-U--Swg",
  authDomain: "endereco-fbbad.firebaseapp.com",
  projectId: "endereco-fbbad",
  storageBucket: "endereco-fbbad.appspot.com",
  messagingSenderId: "496249079886",
  appId: "1:496249079886:web:703f0c69aeb73504d71b1f",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
