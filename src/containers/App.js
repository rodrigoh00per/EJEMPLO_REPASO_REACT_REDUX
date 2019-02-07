import React, { Component } from "react";
import "./App.css";
import Busqueda from "../components/Busqueda";
import CardList from "../components/CardList";
import { connect } from "react-redux";
import { actionBusqueda, actionRequestRobotsApi } from "../actions";

/* ESTAN SON LAS ACCIONES Y ASI ES COMO VAMOS A MANDARLOS A LLAMAR */
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(actionBusqueda(event.target.value)),
    onRequestAPIRobots: () => dispatch(actionRequestRobotsApi())
  };
};
/* ESTE EN SI SON YA LOS VALORES RECIBIDOS COMO PROPS QUE SALEN DE LOS REDUCERS */
const mapStateToProps = state => {
  return {
    valorbusqueda: state.reducedeBusqueda.valorbusqueda,
    pendiente: state.reducedeRequestAPI.pendiente,
    robots: state.reducedeRequestAPI.robots,
    error: state.reducedeRequestAPI.error
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestAPIRobots();
  }

  render() {
    const { valorbusqueda, onSearchChange, robots } = this.props;

    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(valorbusqueda);
    });

    /* EMMPIEZA EL RENDERIZADO DE LA VISTA */
    return (
      <div className="App">
        <div className="header">
          <h1>Lista de Robots Prueba</h1>
          <Busqueda onsearch={onSearchChange} />
        </div>

        <CardList robots={filterRobots} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
