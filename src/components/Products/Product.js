import React from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

//REDUX
import { useDispatch } from "react-redux";
import {
  borrarProductoAction,
  editarProductosAction,
} from "../../actions/productoActions";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const confirmarEliminarProducto = (id) => {
    Swal.fire({
      title: "Estas seguro que quieres eliminar?",
      text: "Si lo eliminas no podras recuperarlo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(borrarProductoAction(id));
      }
    });
  };

  const redireccionarEdicion = (producto) => {
    dispatch(editarProductosAction(producto));
    history.push(`/productos/editar/${product.id}`);
  };

  const { name, price, id } = product;
  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">$ {price}</span>
      </td>
      <td className="acciones">
        <button
          className="btn btn-primary mr-2"
          type="button"
          onClick={() => redireccionarEdicion(product)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmarEliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Product;
