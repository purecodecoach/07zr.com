import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "@firebase/auth";
import { getAnalytics } from "@firebase/analytics";

// TODO: Firebase SDK
const firebaseConfig = {
    apiKey: "AIzaSyCG9mzklZgf2WHCaMdFFiT2n3p1cBhfYCc",
    authDomain: "softnet-llc.firebaseapp.com",
    databaseURL: "https://softnet-llc-default-rtdb.firebaseio.com",
    projectId: "softnet-llc",
    storageBucket: "softnet-llc.appspot.com",
    messagingSenderId: "855643361504",
    appId: "1:855643361504:web:cc044bb239059eff3fc085",
    measurementId: "G-Y2D7M0TF2K"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth();
export const firebaseDb = getFirestore();
export const firebaseStorage = getStorage();
export const fireAnalytics = getAnalytics(firebaseApp);