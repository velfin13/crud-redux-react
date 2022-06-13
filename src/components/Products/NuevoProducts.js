import React from "react";
import { useDispatch, useSelector } from "react-redux";

//aciones de ridux
import { crearNuevoProductoAction } from "../../actions/productoActions";

const NuevoProducts = () => {
  // utilizar usedispacth y te devuelve una funcion
  const dispatch = useDispatch();

  // manda a llamar la funcion de prodcutosAccions
  const agregarProductos = () => dispatch(crearNuevoProductoAction());

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarProductos();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo producto
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre:</label>
                <input
                  type="text"
                  placeholder="Ingresa el Nombre"
                  className="form-control"
                  name="name"
                />
              </div>

              <div className="form-group">
                <label>Precio:</label>
                <input
                  type="number"
                  placeholder="Ingresa el Precio"
                  className="form-control"
                  name="price"
                />
              </div>

              <button
                type="subtmit"
                className="btn  btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducts;
