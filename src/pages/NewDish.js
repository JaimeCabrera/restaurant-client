import React from "react";
import { Formik, useFormik } from "formik";

export const NewDish = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      precio: "",
      categoria: "",
      imagen: "",
      descripcion: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <>
      <h3>Agregar Platillo</h3>
      <div className="d-flex flex-column">
        <div className="justify-content-center">
          <div className="col-8 offset-2">
            <div className="card mt-5">
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">
                      Nombre:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      value={formik.values.nombre}
                      onChange={formik.handleChange}
                      placeholder="Nombre del platillo"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="precio" className="form-label">
                      Precio:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="precio"
                      value={formik.values.precio}
                      onChange={formik.handleChange}
                      placeholder="$30"
                      min={0}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="categoria" className="form-label">
                      Categoria:
                    </label>
                    <select
                      className="form-select"
                      value={formik.values.categoria}
                      onChange={formik.handleChange}
                    >
                      <option disabled>Seleccione una categoria</option>
                      <option value="desayuno">Desayuno</option>
                      <option value="comida">Comida</option>
                      <option value="cena">Cena</option>
                      <option value="bebida">Bebidas</option>
                      <option value="postre">Postre</option>
                      <option value="ensalada">Ensalada</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="precio" className="form-label">
                      Imagen:
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="precio"
                      value={formik.values.imagen}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">
                      Descripcion:
                    </label>
                    <textarea
                      value={formik.values.descripcion}
                      onChange={formik.handleChange}
                      rows={7}
                      className="form-control"
                      id="descripcion"
                      placeholder="Descripcion del platillo"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-success w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
