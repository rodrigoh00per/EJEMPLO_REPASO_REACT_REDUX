import {
  CAMBIAR_VALOR_BUSQUEDA,
  REQUEST_API_COMPLETADA,
  REQUEST_API_ERROR,
  REQUEST_API_PENDIENTE
} from "./constants";

export const actionBusqueda = texto => ({
  type: CAMBIAR_VALOR_BUSQUEDA,
  payload: texto
});

export const actionRequestRobotsApi = () => dispatch => {
  dispatch({ type: REQUEST_API_PENDIENTE });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(resp => resp.json())
    .then(robots => dispatch({ type: REQUEST_API_COMPLETADA, payload: robots }))
    .catch(error => dispatch({ type: REQUEST_API_ERROR, payload: error }));
};
