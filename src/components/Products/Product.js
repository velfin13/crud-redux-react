import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { borrarProductoAction } from "../../actions/productoActions";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.productos.error)

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

  const { name, price, id } = product;
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
