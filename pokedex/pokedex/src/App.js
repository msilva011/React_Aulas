import React, { useState, useEffect } from "react";
import Pokedex from "./components/Pokedex";
import { fetchPokemon } from "./api/pokemonApi";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonId, setPokemonId] = useState(1);

  useEffect(() => {
    async function getPokemon() {
      const data = await fetchPokemon(pokemonId);
      setPokemon(data);
    }
    getPokemon();
  }, [pokemonId]);

  const handleProx = () => {
    setPokemonId(pokemonId + 1);
  };

  const handleAnt = () => {
    if (pokemonId > 1) {
      setPokemonId(pokemonId - 1);
    }
  };

  return (
    <div className="App">
      {pokemon && (
        <Pokedex pokemon={pokemon} prox={handleProx} ant={handleAnt} />
      )}
    </div>
  );
}

export default App;
