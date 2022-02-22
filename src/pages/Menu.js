import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Dish } from "../components/ui/Dish";
import { FirebaseContext } from "../firebase";

export const Menu = () => {
  const { db, collection, onSnapshot } = useContext(FirebaseContext);
  const [dishs, setDishs] = useState([]);

  // conmsultar la base de datos al cargar
  useEffect(() => {
    const getDishs = () => {
      //para tener cambios en tiuempo real
      onSnapshot(
        collection(db, "platillos"),
        (snapshot) => {
          const platillos = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          // console.log(platillos);
          // alamacenar los resultado en el state
          setDishs(platillos);
          // console.log("Current data: ", snapshot.docs.map);
        },
        (error) => {
          console.log(error);
        }
      );
    };
    getDishs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2 className="mb-2">Menu</h2>
      <hr />
      <Link className="ml-4 mt-5 btn-add-dish" to="/new-dish">
        Agregar Platillo
      </Link>
      {dishs.map((dish) => {
        return <Dish platillo={dish} key={dish.id} />;
      })}
    </>
  );
};
