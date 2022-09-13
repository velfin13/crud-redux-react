import React from "react";
import { Link, useHistory } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import {
  borrarProductoAction,
  obtenerProductoEditar,
} from "../actions/productoActions";

const Producto = ({ producto }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // cuando el usuario precione eliminar
  const confirmEliminarProducto = (id) => {
    dispatch(borrarProductoAction(id));
  };

  // redireccionar usuario a edicion
  const redireccionEditarProducto = (producto) => {
    dispatch(obtenerProductoEditar(producto));
    history.push(`/productos/editar/${producto.id}`);
  };

  const { name, price, id } = producto;
  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">$ {price}</span>
      </td>
      <td className="acciones">
        <button
          type="button"
          onClick={() => redireccionEditarProducto(producto)}
          className="btn btn-primary mr-2"
        >
          Editar
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => confirmEliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
