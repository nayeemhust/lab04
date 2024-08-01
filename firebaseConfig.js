// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Add any other Firebase services you plan to use

const firebaseConfig = {
  apiKey: "AIzaSyDhkhy3EemiyRRE_2Srg1aaqsjMtIJrHZI",
  authDomain: "reactnative-todoapp-ea180.firebaseapp.com",
  projectId: "reactnative-todoapp-ea180",
  storageBucket: "reactnative-todoapp-ea180.appspot.com",
  messagingSenderId: "324175341298",
  appId: "1:324175341298:web:70322972054e8f9ca0526b",
  measurementId: "G-0GMSS43ZYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
