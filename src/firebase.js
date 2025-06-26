import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIeXAIKG9jA9pSdeh85iuPn8wp9b_R-cY",
  authDomain: "casamento-8b9df.firebaseapp.com",
  projectId: "casamento-8b9df",
  storageBucket: "casamento-8b9df.firebasestorage.app",
  messagingSenderId: "46174502435",
  appId: "1:46174502435:web:ec9d52ae633dd1fcccfb96"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
