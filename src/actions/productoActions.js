import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types";

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
    } catch (error) {
      console.log(error);
      dispatch(agregarProductoError(true));
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
