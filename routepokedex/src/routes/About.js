import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonInfo from '../components/PokemonInfo';
import { fetchPokemonDetails } from '../api/pokemonApi';

const About = () => {
  const { idpokemon } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    fetchPokemonDetails(idpokemon).then((data) => setPokemonDetails(data));
  }, [idpokemon]);

  return (
    <div>
      {pokemonDetails && (
        <div>
          <h1>About {pokemonDetails.name}</h1>
          <PokemonInfo name={pokemonDetails.name} type={pokemonDetails.type} power={pokemonDetails.power} />
        </div>
      )}
    </div>
  );
};

export default About;
