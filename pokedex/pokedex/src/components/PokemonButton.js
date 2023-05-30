import React from "react";

function PokemonButton({ onNextPokemon, onPreviousPokemon }) {
  return (
    <div className="PokemonButtons">
      <button onClick={onPreviousPokemon}>Pokémon Anterior</button>
      <button onClick={onNextPokemon}>Próximo Pokémon</button>
    </div>
  );
}

export default PokemonButton;
