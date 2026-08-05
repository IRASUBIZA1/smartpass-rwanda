// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCrBUVGFHD2Qu3KStXKOKw7bJFffQSHQ8",
  authDomain: "smartpass-rwanda.firebaseapp.com",
  projectId: "smartpass-rwanda",
  storageBucket: "smartpass-rwanda.firebasestorage.app",
  messagingSenderId: "358453346236",
  appId: "1:358453346236:web:c0e8263ea09a0b311af5b9",
  measurementId: "G-990PQD6RH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database
const db = getFirestore(app);

// Authentication
const auth = getAuth(app);

export { db, auth };
