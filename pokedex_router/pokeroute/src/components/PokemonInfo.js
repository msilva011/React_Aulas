import React from "react";

function PokemonInfo({ pokemon }) {
  return (
    <div className="PokemonInfo">
      <h2>Poderes:</h2>
      <ul>
        {pokemon.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <h2>Tipos:</h2>
      <ul>
        {pokemon.types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonInfo;
