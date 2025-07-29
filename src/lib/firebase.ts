import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithRedirect,
  getRedirectResult,
  signOut as firebaseSignOut,
  UserCredential,
  setPersistence,
  browserLocalPersistence
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxaou136vQevPqMlRoTXRchxXOYrVvzTc",
  authDomain: "auto-apr.firebaseapp.com",
  projectId: "auto-apr",
  storageBucket: "auto-apr.firebasestorage.app",
  messagingSenderId: "784441560388",
  appId: "1:784441560388:web:e4fa3a1c23e29d9c36db11",
  measurementId: "G-T1PC82TZE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Set persistence to LOCAL for single-page applications
setPersistence(auth, browserLocalPersistence);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('email');
googleProvider.addScope('profile');

// Add your production domain here
const allowedOrigins = [
  'http://localhost:3000',
  'https://your-production-domain.com'  // Replace with your actual production domain
];

export const signInWithGoogle = async (): Promise<UserCredential> => {
  try {
    // Clean up any existing auth state before signing in
    const { cleanupAuthState } = await import('./authUtils');
    cleanupAuthState();
    
    // Set the redirect URL based on the current environment
    const currentUrl = window.location.origin;
    console.log('Current URL:', currentUrl);
    
    // Check if we're handling a redirect
    const result = await getRedirectResult(auth);
    if (result) {
      return result;
    }
    
    // Check if popup is allowed
    try {
      // Try popup first
      return await signInWithPopup(auth, googleProvider);
    } catch (popupError) {
      console.log('Popup sign-in failed, trying redirect...', popupError);
      // Fallback to redirect if popup is blocked
      await signInWithRedirect(auth, googleProvider);
      // The redirect will cause a page reload, so we don't need to return anything here
      return new Promise(() => {});
    }
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error;
  }
};

// Check for redirect result when the page loads
if (typeof window !== 'undefined') {
  getRedirectResult(auth).catch(error => {
    console.error('Error handling redirect result:', error);
  });
}

export const signOut = async (): Promise<void> => {
  try {
    // Clean up auth state first
    const { cleanupAuthState } = await import('./authUtils');
    cleanupAuthState();
    
    await firebaseSignOut(auth);
    
    // Force page reload for clean state
    window.location.href = '/';
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};