import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9cEJ-vsHGV9m0TLMKp5r1rFnHxvIue9M",
  authDomain: "innogram-360.firebaseapp.com",
  projectId: "innogram-360",
  storageBucket: "innogram-360.firebasestorage.app",
  messagingSenderId: "63133817555",
  appId: "1:63133817555:web:52aadec76f230d89525226",
  measurementId: "G-R3KBZGF8MM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;

// Types for your application
export interface User {
  uid: string;
  email: string;
  displayName: string | null;
  role: 'government' | 'authority' | 'worker' | 'public';
  createdAt: Date;
}

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
}
