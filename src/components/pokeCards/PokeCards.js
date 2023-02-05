// PokeCards.js

import React from 'react';
import Card from './Card';

const PokeCards = ({ pokeArr, clickPokeCard }) => {

  const pokemonCards = pokeArr.map((poke) => (
    <Card
      key={poke.pokeId} 
      poke={poke}
      clickPokeCard={clickPokeCard}
    />
  ))

  return (
    <div className='cards'>
      {pokemonCards}
    </div>
  )
}

export default PokeCards;