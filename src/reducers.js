import {
  CAMBIAR_VALOR_BUSQUEDA,
  REQUEST_API_COMPLETADA,
  REQUEST_API_ERROR,
  REQUEST_API_PENDIENTE
} from "./constants";

//aqui vamos a poner los estados

const initialStateBusqueda = {
  valorbusqueda: ""
};

const initialStateRequestAPI = {
  pendiente: false,
  robots: [],
  error: ""
};

export const reducedeBusqueda = (state = initialStateBusqueda, action = {}) => {
  // eslint-disable-next-line default-case
  switch (
    action.type //esta linea siempre va
  ) {
    case CAMBIAR_VALOR_BUSQUEDA:
      return Object.assign({}, state, { valorbusqueda: action.payload });
    default:
      return state;
  }
};

export const reducedeRequestAPI = (
  state = initialStateRequestAPI,
  action = {}
) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case REQUEST_API_PENDIENTE:
      return Object.assign({}, state, { pendiente: true });
    case REQUEST_API_COMPLETADA:
      return Object.assign({}, state, {
        pendiente: false,
        robots: action.payload
      });
    case REQUEST_API_ERROR:
      return Object.assign({}, state, {
        error: action.payload,
        pendiente: false
      });
    default:
      return state;
  }
};
