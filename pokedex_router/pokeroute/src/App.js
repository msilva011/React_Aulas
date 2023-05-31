import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import About from "./components/About";
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
    <Router>
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <Pokedex pokemon={pokemon} prox={handleProx} ant={handleAnt} />
          )}
        />
        <Route
          path="/about"
          render={() => <About pokemon={pokemon} />}
        />
      </div>
    </Router>
  );
}

export default App;
