import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

import firebaseConfig from "./config";

const firebase = initializeApp(firebaseConfig);

const db = getFirestore();
const storage = getStorage(firebase);

export {
  firebase,
  db,
  addDoc,
  collection,
  storage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
};
