import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//acciones de redux
import { crearNuevoProductoAction } from "../actions/productoActions";
import { mostrarAlerta, ocultarAlerta } from "../actions/alertaActions";

const NuevoProducto = ({ history }) => {
  // state del componente
  const [name, setname] = useState("");
  const [price, setprice] = useState(0);

  //utilizar dispatch y te crea una funcion
  const dispatch = useDispatch();

  // acceder al store de la aplicacion
  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);
  const alerta = useSelector((state) => state.alerta);

  //mandar a llamar el action de productoActions
  const agregarProducto = (producto) =>
    dispatch(crearNuevoProductoAction(producto));

  const submitNuevoProducto = (e) => {
    e.preventDefault();

    //validar formulario
    if (name.trim() === "" || price <= 0) {
      dispatch(mostrarAlerta("Hay campos vacios"));
      return;
    }

    //si no hay errores
    dispatch(ocultarAlerta());
    //crear producto
    agregarProducto({ name, price });
    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Agregar nuevo</h2>
            {alerta.alert ? (
                <p className="alert alert-danger p2 mt-3 text-center ">
                  {alerta.alert}
                </p>
              ) : null}
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
              {cargando && <p>Cargando ....</p>}
              {error && (
                <p className="alert alert-danger p2 mt-3 text-center ">
                  Hubo un error
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
