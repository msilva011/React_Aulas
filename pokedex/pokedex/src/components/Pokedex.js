import React from "react";
import PokemonInfo from "./PokemonInfo";
import PokemonButton from "./PokemonButton";

function Pokedex({ pokemon, prox, ant }) {
  return (
    <div className="Pokedex">
      <h1>Pokedex</h1>
      <div
        class="card"
        style={{
          width: "300px",
        }}
      >
        <h1 class="card-title">
          {pokemon.id} - {pokemon.name}
        </h1>
        <img
          src={pokemon.sprites.front_default}
          class="card-img-top"
          alt={pokemon.name}
        />
        <div class="card-body">
          <p class="card-text">
            <PokemonInfo pokemon={pokemon} />
            <PokemonButton prox={prox} ant={ant} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
