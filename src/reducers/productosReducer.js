/* eslint-disable import/no-anonymous-default-export */
import {
  AGREAR_PRODUCT,
  AGREAR_PRODUCT_EXITO,
  AGREAR_PRODUCT_ERROR,
} from "../types";

//cada reducer tiene su propio state
const initialValues = {
  productos: [],
  error: null,
  loading: false,
};

export default (state = initialValues, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
