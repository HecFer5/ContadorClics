import React from "react";
import "../hojas-de-estilo/Contador.css"

function contador({ numeroDeClics }) {
  return (
    <div className="contador">
      {numeroDeClics}

    </div>

  );
}
export default contador