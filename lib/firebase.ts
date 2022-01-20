import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, where, getDocs, query, limit } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtXwXrPhqf3UTTX63BH8St1Jj1WvwWfAg",
  authDomain: "nextfire-3bc91.firebaseapp.com",
  projectId: "nextfire-3bc91",
  storageBucket: "nextfire-3bc91.appspot.com",
  messagingSenderId: "558469854795",
  appId: "1:558469854795:web:2f6813f3f145674f3c7fce"
};

// Initialize firebase
// You can only initialize once, but in some cases Next will try to run the code twice in development
// If initializeApp already called for an existing project, it's going to throw an error
// But we can avoid that by using try catch
function createFirebaseApp(config) {
    try {
        return getApp();
    } catch {
        return initializeApp(config);
    }
}
const firebaseApp = createFirebaseApp(firebaseConfig);

// Export auth in firebase sdk
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

// Firestore exports
export const firestore = getFirestore(firebaseApp);

// Storage exports
export const storage = getStorage(firebaseApp);
export const STATE_CHANGED = 'state_changed';