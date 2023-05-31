import React from "react";

function PokemonButton({ prox, ant, about }) {
  return (
    <div className="PokemonButtons">
      <div
        class="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
        style={{ padding: "5px" }}
      >
        <button type="button" class="btn btn-primary mt-05" onClick={ant}>
          Anterior
        </button>
        <button type="button" class="btn btn-warning" onClick={about} >
          About
        </button>
        <button type="button" class="btn btn-primary" onClick={prox}>
          Próximo
        </button>
      </div>
    </div>
  );
}

export default PokemonButton;
