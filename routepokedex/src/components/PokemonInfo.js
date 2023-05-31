import React from 'react';

const PokemonInfo = ({ name, type, power }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Type: {type}</p>
      <p>Power: {power}</p>
    </div>
  );
};

export default PokemonInfo;
