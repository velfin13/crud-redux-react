import {
  AGREGAR_PRODUCT,
  AGREGAR_PRODUCT_EXITO,
  AGREGAR_PRODUCT_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_ERROR,
  DESCARGA_PRODUCTOS_EXITO,
} from "../types";
import axios from "../config/axios";
import Swal from "sweetalert2";

// crear nuevo producto
export const crearNuevoProductoAction = (producto) => {
  return async (dispatch) => {
    dispatch(agregarProducto());

    try {
      //insertar en la api
      await axios.post("/productos", producto);

      //si todo sale bien
      dispatch(agregarProductoExito(producto));
      //agregar alerta
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Agregado con exito!!",
        showConfirmButton: false,
        timer: 1700,
      });
    } catch (error) {
      //si hay un error
      dispatch(agregarProductoError());
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Ups, No se pudo ingresar el producto!!",
        showConfirmButton: false,
        timer: 1700,
      });
    }
  };
};

const agregarProducto = () => ({
  type: AGREGAR_PRODUCT,
  payload: { loading: true, error: null },
});

const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCT_EXITO,
  payload: { producto, loading: false },
});
const agregarProductoError = () => ({
  type: AGREGAR_PRODUCT_ERROR,
  payload: { loading: false, error: true },
});

//funcion que descargar los productos de la base de datos
export const obtenerProductosActions = () => {
  return async (dispatch) => {
    dispatch(descargarProductos());

    try {
      const respuesta = await axios.get("/productos");
      dispatch(descargaProductosExitosa(respuesta.data));
    } catch (error) {
      dispatch(descargaProductosEror());
    }
  };
};

const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: { loading: true },
});

const descargaProductosExitosa = (productos) => ({
  type: DESCARGA_PRODUCTOS_EXITO,
  payload: { productos: productos, loading: false, error: false },
});

const descargaProductosEror = () => ({
  type: DESCARGA_PRODUCTOS_ERROR,
  payload: { loading: false, error: true },
});
