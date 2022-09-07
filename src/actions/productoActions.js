import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  COMENZAR_DESCARGA_PRODUCTOS_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS_EXITO,
} from "../types";
import Swal from "sweetalert2";
import axios from "../config/axios";

// crear nuevos productos
export const crearNuevoProductoAction = (producto) => {
  return async (dispatch) => {
    dispatch(agregarProducto());

    try {
      //insertar cliente en la bd
      await axios.post("/productos", producto);

      // si todo sale bien
      dispatch(agregarProductoExito(producto));
      Swal.fire(
        "Producto agregado!",
        "Se ha registrado correctamente!",
        "success"
      );
    } catch (error) {
      dispatch(agregarProductoError(true));
      Swal.fire("Ups!", "Ha ocurrido un error!", "error");
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

// FUNCION QUE DESCARGAR LOS PRODUCTOS DE LA BASE DE DATOS
export const obtenerProductosAction = () => {
  return async (dispatch) => {
    dispatch(descargarProductos());

    try {
      const response = await axios.get("/productos");
      dispatch(descargaProductoExito(response.data));
    } catch (error) {
      dispatch(descargaProductoError(true));
    }
  };
};

const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true,
});

const descargaProductoExito = (producto) => ({
  type: COMENZAR_DESCARGA_PRODUCTOS_EXITO,
  payload: producto,
});

const descargaProductoError = (status) => ({
  type: COMENZAR_DESCARGA_PRODUCTOS_ERROR,
  payload: status,
});
