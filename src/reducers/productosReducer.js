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

//cada reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoEliminar: null,
  productoEditar: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COMENZAR_DESCARGA_PRODUCTOS:
    case AGREGAR_PRODUCTO:
      return { ...state, loading: action.payload };

    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        productos: [...state.productos, action.payload],
      };
    case COMENZAR_DESCARGA_PRODUCTOS_ERROR:
    case OBTENER_PRODUCTO_ELIMINAR_ERROR:
    case AGREGAR_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case COMENZAR_DESCARGA_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        error: false,
        productos: action.payload,
      };

    case OBTENER_PRODUCTO_ELIMINAR:
      return {
        ...state,
        productoEliminar: action.payload,
      };

    case OBTENER_PRODUCTO_ELIMINAR_EXITO:
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto.id !== state.productoEliminar
        ),
        productoEliminar: null,
      };
    case OBTENER_PRODUCTO_EDITAR:
      return {
        ...state,
        productoEditar: action.payload,
      };
    case PRODUCTO_EDITADO_EXITO:
      return {
        ...state,
        productoEditar: null,
        productos: state.productos.map((producto) =>
          producto.id === action.payload.id
            ? (producto = action.payload)
            : producto
        ),
      };

    default:
      return state;
  }
};
