import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//acciones de redux
import { crearNuevoProductoAction } from "../actions/productoActions";

const NuevoProducto = () => {
  // state del componente
  const [name, setname] = useState("");
  const [price, setprice] = useState(0);

  //utilizar dispatch y te crea una funcion
  const dispatch = useDispatch();

  //mandar a llamar el action de productoActions
  const agregarProducto = (producto) =>
    dispatch(crearNuevoProductoAction(producto));

  const submitNuevoProducto = (e) => {
    e.preventDefault();

    //validar formulario
    if (name.trim() === "" || price <= 0) {
      return;
    }

    //si no hay errores

    //crear producto
    agregarProducto({ name, price });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Agregar nuevo</h2>

            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label htmlFor="name">Nombre:</label>
                <input
                  className="form-control"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  type="text"
                  placeholder="Nombre del producto"
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Precio:</label>
                <input
                  className="form-control"
                  name="price"
                  id="price"
                  value={price}
                  onChange={(e) => setprice(Number(e.target.value))}
                  type="number"
                  placeholder="Precio del producto"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
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

export default NuevoProducto;
