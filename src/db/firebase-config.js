import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAMfMgBcm2WpUiy65Ss869QZ5NRYZjfEKI",
    authDomain: "ecom-tl-coderhouse.firebaseapp.com",
    projectId: "ecom-tl-coderhouse",
    storageBucket: "ecom-tl-coderhouse.appspot.com",
    messagingSenderId: "380589824925",
    appId: "1:380589824925:web:354390b1f7ae9eb4b2ed74"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);