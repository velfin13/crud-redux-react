import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerProductosActions } from "../../actions/productoActions";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // consultar api
    const cargarProductos = () => dispatch(obtenerProductosActions());
    cargarProductos();
  }, [dispatch]);

  const error = useSelector((state) => state.productos.error);
  const productos = useSelector((state) => state.productos.productos);
  const loading = useSelector((state) => state.productos.loading);

  return (
    <>
      <h2 className="text-center my-5">Listado de productos</h2>
      {error && (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error
        </p>
      )}

      {loading && (
        <p className="text-center">
          Cargando .....
        </p>
      )}
      <table className="table table-striped text-center">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Products;
