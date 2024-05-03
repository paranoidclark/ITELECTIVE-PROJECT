import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDvWmRoZ-lsEAbhlQdw3GLUZLNr4y5Tp0M",
    authDomain: "solesearch-840c3.firebaseapp.com",
    projectId: "solesearch-840c3",
    storageBucket: "solesearch-840c3.appspot.com",
    messagingSenderId: "937122107025",
    appId: "1:937122107025:web:48bbec624ee013a3aaf930"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app