/* eslint-disable import/no-anonymous-default-export */
import {
  AGREGAR_PRODUCT,
  AGREGAR_PRODUCT_EXITO,
  AGREGAR_PRODUCT_ERROR,
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

    default:
      return state;
  }
};
