import { useEffect } from "react";
import { obtenerProductosAction } from "../actions/productoActions";
//Redux
import { useDispatch, useSelector } from "react-redux";
import Producto from "./Producto";

const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // consultar la api
    const cargarProductos = () => dispatch(obtenerProductosAction());
    cargarProductos();
  }, []);

  //obtener state
  const productos = useSelector((state) => state.productos.productos);
  const error = useSelector((state) => state.productos.error);
  const cargando = useSelector((state) => state.productos.loading);

  return (
    <>
      <h2 className="text-center my-5">Listado de Productos</h2>
      {error && (
        <p className="alert alert-danger p2 mt-3 text-center ">Hubo un error</p>
      )}
       {cargando && <p>Cargando ....</p>}
      <table className="table table-striped text-center">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length < 0 ? (
            <p>No hay productos</p>
          ) : (
            productos.map((producto) => (
              <Producto key={producto.id} producto={producto} />
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default Productos;
