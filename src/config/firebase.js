import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAUTaG9qx_Tmq3i6j5QWuYZgGJLAcz8Yb4",
  authDomain: "fir-app-909c6.firebaseapp.com",
  projectId: "fir-app-909c6",
  storageBucket: "fir-app-909c6.appspot.com",
  messagingSenderId: "218056985015",
  appId: "1:218056985015:web:d9fb0439c9207853e34032",
  measurementId: "G-WLKZHD1074"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);
const storage = getStorage(app);
//const analytics = getAnalytics(app);

export {auth, db, storage};