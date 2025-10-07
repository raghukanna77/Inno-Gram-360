import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Debug: Log environment variables (remove in production)
console.log('Environment variables check:', {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY ? 'SET' : 'MISSING',
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ? 'SET' : 'MISSING',
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ? 'SET' : 'MISSING',
});

// Your web app's Firebase configuration with fallback to hardcoded values
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyB9cEJ-vsHGV9m0TLMKp5r1rFnHxvIue9M",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "innogram-360.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "innogram-360",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "innogram-360.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "63133817555",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:63133817555:web:52aadec76f230d89525226",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-R3KBZGF8MM"
};

console.log('Firebase config loaded:', firebaseConfig);

// Validate configuration
if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId) {
  console.error('Firebase configuration validation failed:', firebaseConfig);
  throw new Error('Missing Firebase configuration. Please check your environment variables.');
}

// Initialize Firebase
let app;
try {
  app = initializeApp(firebaseConfig);
  console.log('Firebase app initialized successfully');
} catch (error) {
  console.error('Firebase initialization error:', error);
  throw error;
}

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

console.log('Firebase services initialized');

// Initialize analytics only in production and if supported
let analytics;
try {
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
    console.log('Firebase analytics initialized');
  }
} catch (error) {
  console.log('Analytics not available:', error);
}

export { analytics };
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
