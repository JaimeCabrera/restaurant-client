import React, { useContext, useRef } from "react";
import { FirebaseContext } from "../../firebase";
export const Dish = ({ platillo }) => {
  const { id, nombre, imagen, existencia, categoria, precio, descripcion } =
    platillo;

  // existencia ref para acceder al valro directamente del
  const existenciaRef = useRef(existencia);
  // contextd e firebase para el cambio de datos
  const { updateDoc, db, doc } = useContext(FirebaseContext);
  // modificar el estadod del platillo en firebase en
  const updateExist = async () => {
    // string a boolean
    const existencia = existenciaRef.current.value === "true";
    try {
      // se obtiene la referencia al docuemto con el nombre y el id
      const platilloDoc = doc(db, "platillos", id);
      // se ejecuta eñ update del valor
      await updateDoc(platilloDoc, { existencia: existencia });
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="card mb-3 mt-4 shadow-sm">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={imagen}
              className="img-fluid rounded-start"
              alt="timagen del platillo"
            />
            <div className="d-flex flex-column p-2">
              <label className="text-black-50 mb-2">Existencia:</label>
              <select
                className="form-select form-select-sm mb-2"
                aria-label="Default select example"
                value={existencia}
                ref={existenciaRef}
                onChange={() => updateExist()}
              >
                <option value="true">Disponible</option>
                <option value="false">No Disponible</option>
              </select>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{nombre}</h5>
              <p className="card-text">{descripcion}</p>
              <p className="card-text d-flex">
                <small className="text-muted">
                  Categoría:{" "}
                  <span className="badge bg-secondary">{categoria}</span>
                </small>
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Precio: <b>${precio}</b>{" "}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
