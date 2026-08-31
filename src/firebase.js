import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase Console > Project Settings > General > "Your apps" se ye config copy karein
const firebaseConfig = {
  apiKey: "YAHAN_APNI_API_KEY_DALEIN",
  authDomain: "YAHAN_APNA_AUTH_DOMAIN_DALEIN",
  projectId: "YAHAN_APNA_PROJECT_ID_DALEIN",
  storageBucket: "YAHAN_APNA_STORAGE_BUCKET_DALEIN",
  messagingSenderId: "YAHAN_APNA_SENDER_ID_DALEIN",
  appId: "YAHAN_APNI_APP_ID_DALEIN",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);