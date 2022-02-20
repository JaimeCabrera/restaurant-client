import React from "react";
import { Route, Routes } from "react-router-dom";

import { Orders } from "./pages/Orders";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Orders />} />
      </Routes>
    </>
  );
};
