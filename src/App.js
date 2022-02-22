import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  FirebaseContext,
  firebase,
  db,
  addDoc,
  collection,
  storage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
  getDocs,
  doc,
  onSnapshot,
  updateDoc,
} from "./firebase";

import { SideBar } from "./components/ui/SideBar";
import { Menu } from "./pages/Menu";
import { NewDish } from "./pages/NewDish";
import { Orders } from "./pages/Orders";

export const App = () => {
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        db,
        addDoc,
        collection,
        storage,
        ref,
        getDownloadURL,
        uploadBytesResumable,
        getDocs,
        doc,
        onSnapshot,
        updateDoc,
      }}
    >
      <div className="container-fluid">
        <div className="row vh-100">
          <SideBar />
          <div className="col-sm-8 col-md-8 col-lg-9 p-5">
            <Routes>
              <Route path="/" element={<Orders />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/new-dish" element={<NewDish />} />
            </Routes>
          </div>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
};
