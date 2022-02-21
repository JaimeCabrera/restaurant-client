import React, { useContext, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { FirebaseContext, addDoc, collection } from "../firebase";
import { Spinner } from "../components/Spinner";
import { useNavigate } from "react-router-dom";

// reglas de validacion del formulario
const validationSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(3, "Los platillos deben tener al menos 3 caracteres")
    .required("El nombre del platillo es obligatorio"),
  precio: Yup.number()
    .min(1, "Debes agregar un precio valido")
    .required("El precio es obligatorio"),
  categoria: Yup.string().required("La categoria es obligatoria"),
  imagen: Yup.mixed().required("La imagen es obligatoria"),
  descripcion: Yup.string()
    .min(
      10,
      "La descripcion de los platillos deben tener al menos 10 caracteres"
    )
    .required("La descripcion del platillo es obligatoria"),
});

export const NewDish = () => {
  const [loading, setLoading] = useState(false);

  // hok para redireccionar
  const navigate = useNavigate();
  // context con las operaciones de firebase
  const { db } = useContext(FirebaseContext);
  return (
    <>
      <h4>Agregar platillo</h4>
      <hr />

      <div className="d-flex flex-column">
        <div className="justify-content-center">
          <div className="col-8 offset-2">
            <div className="card mt-2">
              <div className="card-body">
                <Formik
                  initialValues={{
                    nombre: "",
                    precio: "",
                    categoria: "",
                    imagen: "",
                    descripcion: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(dish) => {
                    // same shape as initial values
                    try {
                      dish.existencia = true;
                      setLoading(true);
                      addDoc(collection(db, "platillos"), dish)
                        .then((res) => {
                          // console.log(res);
                          setLoading(false);
                          // redireccionar
                          navigate("/menu");
                        })
                        .catch((e) => {
                          console.log(e);
                        });
                      // console.log(doc);
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  {({
                    errors,
                    values,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">
                          Nombre:
                        </label>
                        <input
                          type="text"
                          className={
                            errors.nombre && touched.nombre
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          id="nombre"
                          value={values.nombre}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Nombre del platillo"
                          aria-describedby="nombre"
                        />
                        {errors.nombre && touched.nombre ? (
                          <div className="form-text text-danger">
                            {errors.nombre}
                          </div>
                        ) : null}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="precio" className="form-label">
                          Precio:
                        </label>
                        <input
                          type="number"
                          className={
                            errors.precio && touched.precio
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          id="precio"
                          value={values.precio}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="$30"
                          min={0}
                        />
                        {errors.precio && touched.precio ? (
                          <div className="form-text text-danger">
                            {errors.precio}
                          </div>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="categoria" className="form-label">
                          Categoria:
                        </label>
                        <select
                          className={
                            errors.categoria && touched.categoria
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          id="categoria"
                          value={values.categoria}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="" disabled>
                            Seleccione una categoria
                          </option>
                          <option value="desayuno">Desayuno</option>
                          <option value="comida">Comida</option>
                          <option value="cena">Cena</option>
                          <option value="bebida">Bebidas</option>
                          <option value="postre">Postre</option>
                          <option value="ensalada">Ensalada</option>
                        </select>
                        {errors.categoria && touched.categoria ? (
                          <div className="form-text text-danger">
                            {errors.categoria}
                          </div>
                        ) : null}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="imagen" className="form-label">
                          Imagen:
                        </label>
                        <input
                          type="file"
                          className={
                            errors.imagen && touched.imagen
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          id="imagen"
                          accept="image/png, image/jpeg, image/jpg"
                          value={values.imagen}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.imagen && touched.imagen ? (
                          <div className="form-text text-danger">
                            {errors.imagen}
                          </div>
                        ) : null}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">
                          Descripcion:
                        </label>
                        <textarea
                          value={values.descripcion}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          rows={7}
                          className={
                            errors.descripcion && touched.descripcion
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          id="descripcion"
                          placeholder="Descripcion del platillo"
                        ></textarea>
                        {errors.descripcion && touched.descripcion ? (
                          <div className="form-text text-danger">
                            {errors.descripcion}
                          </div>
                        ) : null}
                      </div>
                      <div className="d-flex">{loading && <Spinner />}</div>
                      <button
                        disabled={loading}
                        type="submit"
                        className="btn btn-secondary w-100"
                      >
                        {loading ? "Guardando..." : "Agregar platillo"}
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
