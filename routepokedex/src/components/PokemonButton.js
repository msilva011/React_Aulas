import React from 'react';

const PokemonButton = ({ label, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>{label}</button>
  );
};

export default PokemonButton;
