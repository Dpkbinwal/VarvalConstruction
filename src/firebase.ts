import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOiQIoJQ6KOR1SoezZ33p7RD0e_1kGF9Y",
  authDomain: "varval-construction.firebaseapp.com",
  projectId: "varval-construction",
  storageBucket: "varval-construction.firebasestorage.app",
  messagingSenderId: "416535340383",
  appId: "1:416535340383:web:b45434cda82b7d9f5082ea",
  measurementId: "G-6QQGSBEM3C"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;