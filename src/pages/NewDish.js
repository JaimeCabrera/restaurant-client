import React from "react";

export const NewDish = () => {
  return (
    <>
      <h3>Agregar Platillo</h3>
      <div className="d-flex flex-column">
        <div className="justify-content-center">
          <div className="col-8 offset-2">
            <div class="card mt-5">
              <div class="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Nombre:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
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
                      placeholder="$30"
                      min={0}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="categoria" className="form-label">
                      Categoria:
                    </label>
                    <select className="form-select">
                      <option selected disabled>
                        Seleccione una categoria
                      </option>
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
                    <input type="file" className="form-control" id="precio" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">
                      Descripcion:
                    </label>
                    <textarea
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
