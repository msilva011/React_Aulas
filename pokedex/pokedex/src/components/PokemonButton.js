import React from "react";

function PokemonButton({ prox, ant }) {
  return (
    <div className="PokemonButtons">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-primary" onClick={ant}>
          Anterior
        </button>
        <button type="button" class="btn btn-outline-primary" onClick={prox}>
          Próximo
        </button>
      </div>
    </div>
  );
}

export default PokemonButton;
