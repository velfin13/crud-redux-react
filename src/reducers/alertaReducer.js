import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

const initialState = {
  alerta: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOSTRAR_ALERTA:
      return {
        alert: action.payload,
      };

    case OCULTAR_ALERTA:
      return {
        alert: null,
      };
    default:
      return state;
  }
};
