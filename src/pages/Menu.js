import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <h2 className="mb-2">Menu</h2>
      <hr />
      <Link className="ml-4 mt-5 btn-add-dish" to="/new-dish">
        Agregar Platillo
      </Link>
    </>
  );
};
