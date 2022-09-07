import React from "react";
import { Link } from "react-router-dom";

const Producto = ({ producto }) => {
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
        <button className="btn btn-danger" type="button">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
