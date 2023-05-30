import React from "react";
import PokemonInfo from "./PokemonInfo";
import PokemonButton from "./PokemonButton";

function Pokedex({ pokemon, onNextPokemon, onPreviousPokemon }) {
  return (
    <div className="Pokedex">
      <h1>
        #{pokemon.id} - {pokemon.name}
      </h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <PokemonInfo pokemon={pokemon} />
      <PokemonButton
        onNextPokemon={onNextPokemon}
        onPreviousPokemon={onPreviousPokemon}
      />
    </div>
  );
}

export default Pokedex;
