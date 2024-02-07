import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBkMlHnQBuJQz_k_dp_ycZFqz467HKHp9o",
  authDomain: "commerceapp-7f2bd.firebaseapp.com",
  projectId: "commerceapp-7f2bd",
  storageBucket: "commerceapp-7f2bd.appspot.com",
  messagingSenderId: "775965792573",
  appId: "1:775965792573:web:c666f5e26a5b7f553d8d54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)
const auth = getAuth(app)

export {fireDB,auth}