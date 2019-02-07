import React from "react";
import "./Busqueda.css";

const Busqueda = ({ onsearch }) => {
  return (
    <div>
      <input
        onChange={onsearch}
        type="text"
        placeholder="Introduce el valor a buscar"
      />
    </div>
  );
};

export default Busqueda;
