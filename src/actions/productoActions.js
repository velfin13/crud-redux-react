import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  COMENZAR_DESCARGA_PRODUCTOS_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS_EXITO,
  OBTENER_PRODUCTO_ELIMINAR,
  OBTENER_PRODUCTO_ELIMINAR_EXITO,
  OBTENER_PRODUCTO_ELIMINAR_ERROR,
  OBTENER_PRODUCTO_EDITAR,
  COMENZAR_EDICION_PRODUCTO,
  PRODUCTO_EDITADO_ERROR,
  PRODUCTO_EDITADO_EXITO,
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

//FUNCION ELIMINAR
export const borrarProductoAction = (id) => {
  return async (dispatch) => {
    Swal.fire({
      title: "Estas seguro de eliminar?",
      text: "Una vez eliminado no se podra recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminalo!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        dispatch(obtenetProductoEliminar(id));

        try {
          await axios.delete(`/productos/${id}`);
          dispatch(obtenetProductoEliminarExito());
          Swal.fire("Eliminado!", "Ha sido eliminado con exito.", "success");
        } catch (error) {
          dispatch(obtenetProductoEliminarError());
          Swal.fire("Upps!", "Hubo un error.", "error");
        }
      }
    });
  };
};
const obtenetProductoEliminar = (id) => ({
  type: OBTENER_PRODUCTO_ELIMINAR,
  payload: id,
});

const obtenetProductoEliminarExito = () => ({
  type: OBTENER_PRODUCTO_ELIMINAR_EXITO,
});

const obtenetProductoEliminarError = () => ({
  type: OBTENER_PRODUCTO_ELIMINAR_ERROR,
  payload: true,
});

// editar producto
export const obtenerProductoEditar = (producto) => {
  return (dispatch) => {
    dispatch(obtenerProductoEditarAction(producto));
  };
};

const obtenerProductoEditarAction = (producto) => ({
  type: OBTENER_PRODUCTO_EDITAR,
  payload: producto,
});

// editar producto en la api y state
export const editarProductoAction = (producto) => {
  return async (dispatch) => {
    dispatch(editarProducto());

    try {
      await axios.put(`/productos/${producto.id}`, producto);
      dispatch(editarProductoExito(producto));
    } catch (error) {}
  };
};

const editarProducto = () => ({
  type: OBTENER_PRODUCTO_EDITAR,
});

const editarProductoExito = (producto) => ({
  type: PRODUCTO_EDITADO_EXITO,
  payload: producto,
});
