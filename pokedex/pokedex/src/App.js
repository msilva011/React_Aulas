import React, { useState, useEffect } from "react";
import Pokedex from "./components/Pokedex";
import { fetchPokemon } from "./api/pokemonApi";

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

  const handleNextPokemon = () => {
    setPokemonId(pokemonId + 1);
  };

  const handlePreviousPokemon = () => {
    if (pokemonId > 1) {
      setPokemonId(pokemonId - 1);
    }
  };

  return (
    <div className="App">
      {pokemon && (
        <Pokedex
          pokemon={pokemon}
          onNextPokemon={handleNextPokemon}
          onPreviousPokemon={handlePreviousPokemon}
        />
      )}
    </div>
  );
}

export default App;
