import React from "react";
import { useHistory } from "react-router-dom";
import PokemonInfo from "./PokemonInfo";
import PokemonButton from "./PokemonButton";
import { useNavigate } from "react-router-dom";

function Pokedex({ pokemon, prox, ant }) {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/about");
  };
  

  return (
    <div className="Pokedex">
      <h1>Pokedex</h1>
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
          <p className="card-text">
            <PokemonInfo pokemon={pokemon} />
            <PokemonButton prox={prox} ant={ant} />
          </p>
          <button
            className="btn btn-outline-primary"
            onClick={handleAboutClick}
          >
            About
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
