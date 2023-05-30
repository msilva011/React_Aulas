import React from "react";

function PokemonInfo({ pokemon }) {
  return (
    <div className="PokemonInfo">
      <h2>Poderes:</h2>
      <ul>
        {pokemon.abilities.map((ability) => (
          <p key={ability.ability.name}>{ability.ability.name}</p>
        ))}
      </ul>
      <h2>Tipos:</h2>
      <ul>
        {pokemon.types.map((type) => (
          <p key={type.type.name}>{type.type.name}</p>
        ))}
      </ul>
    </div>
  );
}

export default PokemonInfo;
