// PokeCards.js

import React from 'react';
import Card from './Card';

const PokeCards = ({ pokeArr }) => {

  const pokemonCards = pokeArr.map((poke) => (
    <Card
      key={poke.pokeId} 
      poke={poke}
    />
  ))

  return (
    <div className='cards'>
      {pokemonCards}
    </div>
  )
}

export default PokeCards;