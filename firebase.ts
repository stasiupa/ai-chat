import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB02TGCccfei_v7x7Bqdez7TIiQVCin4Uk",
  authDomain: "ai-chat-a2a7f.firebaseapp.com",
  projectId: "ai-chat-a2a7f",
  storageBucket: "ai-chat-a2a7f.appspot.com",
  messagingSenderId: "500794661600",
  appId: "1:500794661600:web:d56f62e7404de831be4e85"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }