import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types";
import Swal from 'sweetalert2'
import axios from "../config/axios";

// crear nuevos productos
export const crearNuevoProductoAction = (producto) => {
  return async(dispatch) => {
    dispatch(agregarProducto());

    try {
      //insertar cliente en la bd
      await axios.post("/productos", producto);

      // si todo sale bien
      dispatch(agregarProductoExito(producto));
      Swal.fire(
        'Producto agregado!',
        'Se ha registrado correctamente!',
        'success'
      )
    } catch (error) {
      dispatch(agregarProductoError(true));
      Swal.fire(
        'Ups!',
        'Ha ocurrido un error!',
        'error'
      )
    }
  };
};

const agregarProducto = () => ({ type: AGREGAR_PRODUCTO, payload: true });

const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

const agregarProductoError = (error) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: error,
});
