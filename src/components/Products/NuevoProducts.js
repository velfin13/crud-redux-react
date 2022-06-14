import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//aciones de ridux
import { crearNuevoProductoAction } from "../../actions/productoActions";

const NuevoProducts = ({ history }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  // utilizar usedispacth y te devuelve una funcion
  const dispatch = useDispatch();

  //acceder al state de redux
  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);

  // manda a llamar la funcion de prodcutosAccions
  const agregarProductos = (producto) =>
    dispatch(crearNuevoProductoAction(producto));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || price < 1 || isNaN(price)) {
      return;
    }

    agregarProductos({ name, price });
    history.push("/");
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Precio:</label>
                <input
                  type="number"
                  placeholder="Ingresa el Precio"
                  className="form-control"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>

              <button
                type="subtmit"
                className="btn  btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
            {cargando ? <p>Cargando ...</p> : null}
            {error ? (
              <p className="alert alert-danger p-2 mt-3 text-center">
                Hubo un Error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducts;
