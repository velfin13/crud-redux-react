import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

//muestra una alerta
export const mostrarAlerta = (alerta) => {
  return (dispatch) => {
    dispatch(mostrarAlertaError(alerta));
  };
};

const mostrarAlertaError = (alerta) => ({
  type: MOSTRAR_ALERTA,
  payload: alerta,
});

// ocultar alerta
export const ocultarAlerta = () => {
  return (dispatch) => {
    dispatch(ocultarAlertaError());
  };
};

const ocultarAlertaError = () => ({
  type: OCULTAR_ALERTA,
});
