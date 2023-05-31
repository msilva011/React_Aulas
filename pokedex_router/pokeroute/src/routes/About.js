import React from "react";
import PokemonInfo from "../components/PokemonInfo";

function About({ pokemon }) {
  return (
    <div className="About">
      <h1>About</h1>
      {pokemon && (
        <div className="card" style={{ width: "300px" }}>
          <h1 className="card-title">
            {pokemon.id} - {pokemon.name}
          </h1>
          <img
            src={pokemon.sprites.front_default}
            className="card-img-top"
            alt={pokemon.name}
          />
          <div className="card-body">
            <PokemonInfo pokemon={pokemon} />
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
