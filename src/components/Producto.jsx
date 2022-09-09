import React from "react";
import { Link } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { borrarProductoAction } from "../actions/productoActions";

const Producto = ({ producto }) => {
  const dispatch = useDispatch();

  // cuando el usuario precione eliminar
  const confirmEliminarProducto = (id) => {
    dispatch(borrarProductoAction(id));
  };

  const { name, price, id } = producto;
  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">$ {price}</span>
      </td>
      <td className="acciones">
        <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">
          Editar
        </Link>
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
