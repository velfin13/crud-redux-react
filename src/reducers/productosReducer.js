/* eslint-disable import/no-anonymous-default-export */
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
} from "../types";

//cada reducer tiene su propio state
const initialValues = {
  productos: [],
  error: null,
  loading: false,
};

export default (state = initialValues, action) => {
  switch (action.type) {
    case AGREGAR_PRODUCT:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case AGREGAR_PRODUCT_EXITO:
      return {
        ...state,
        loading: action.payload.loading,
        productos: [...state.productos, action.payload.producto],
      };
    case AGREGAR_PRODUCT_ERROR:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case COMENZAR_DESCARGA_PRODUCTOS:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case DESCARGA_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
        productos: action.payload.productos,
      };

    case DESCARGA_PRODUCTOS_ERROR:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case PRODUCTO_ELIMINAR:
      return {
        ...state,
        productoEliminar: action.payload.id,
      };
    case PRODUCTO_ELIMINAR_EXITO:
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto.id !== state.productoEliminar
        ),
        productoEliminar: null,
      };
    case PRODUCTO_ELIMINAR_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
