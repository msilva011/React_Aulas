import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PokemonButton from './PokemonButton';
import PokemonInfo from './PokemonInfo';
import { fetchPokemon } from '../api/pokemonApi';

const Pokedex = () => {
  const [pokemon, setPokemon] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetchPokemon(1).then((data) => setPokemon(data));
  }, []);

  const handlePreviousClick = () => {
    if (pokemon.id > 1) {
      fetchPokemon(pokemon.id - 1).then((data) => setPokemon(data));
    }
  };

  const handleNextClick = () => {
    fetchPokemon(pokemon.id + 1).then((data) => setPokemon(data));
  };

  const handleAboutClick = () => {
    history.push(`/about/${pokemon.id}`);
  };

  return (
    <div>
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <p>{pokemon.id}</p>
          <img src={pokemon.image} alt={pokemon.name} />
          <PokemonButton label="Previous Pokemon" onClick={handlePreviousClick} disabled={pokemon.id === 1} />
          <PokemonButton label="About" onClick={handleAboutClick} />
          <PokemonButton label="Next Pokemon" onClick={handleNextClick} />
        </div>
      )}
    </div>
  );
};

export default Pokedex;
