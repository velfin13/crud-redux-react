import {
  AGREGAR_PRODUCT,
  AGREGAR_PRODUCT_EXITO,
  AGREGAR_PRODUCT_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_ERROR,
  DESCARGA_PRODUCTOS_EXITO,
  PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINAR_ERROR,
  PRODUCTO_ELIMINAR_EXITO,
  PRODUCTO_EDITAR,
  COMENZAR_EDICION_PRODUCTO,
  PRODUCTO_EDITAR_ERROR,
  PRODUCTO_EDITAR_EXITO,
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

// SELECCIONA Y ELIMINA EL PRODUCTO
export const borrarProductoAction = (id) => {
  return async (dispatch) => {
    dispatch(obtenerProductoEliminar(id));

    try {
      await axios.delete(`/producto/${id}`);
      dispatch(productoEliminarExito());
      Swal.fire("Eliminado!", "Regsitro eliminado correctamente.", "success");
    } catch (error) {
      dispatch(elimiarProductoError());
      Swal.fire("Ups!", "Hubo un error en el servidor.", "error");
    }
  };
};

const obtenerProductoEliminar = (id) => ({
  type: PRODUCTO_ELIMINAR,
  payload: { id },
});

const productoEliminarExito = () => ({
  type: PRODUCTO_ELIMINAR_EXITO,
  payload: { error: false },
});

const elimiarProductoError = () => ({
  type: PRODUCTO_ELIMINAR_ERROR,
});

// COLOCAR PRODUCTO EN EDICION
export const editarProductosAction = (producto) => {
  return async (dispatch) => {
    console.log(producto);
    dispatch(editarProductos(producto));
  };
};

const editarProductos = (producto) => ({
  type: PRODUCTO_EDITAR,
  payload: { producto },
});

// EDITAR PRODUCTO DE LA API Y DEL STATE
export const editarProductoApiAction = (producto) => {
  return async (dispatch) => {
    dispatch(editarProductoApi(producto));

    try {
      console.log(producto);
      // const resultado = axios.put(`/productos/${producto.id}`,producto);
    } catch (error) {}
  };
};
const editarProductoApi = (producto) => ({
  type: COMENZAR_EDICION_PRODUCTO,
  payload: { producto },
});
