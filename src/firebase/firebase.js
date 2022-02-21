import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

import firebaseConfig from "./config";

const firebase = initializeApp(firebaseConfig);

const db = getFirestore();

export { firebase, db, addDoc, collection };
