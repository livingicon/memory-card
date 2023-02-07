// PokeCards.js

import React from 'react';
import Card from './Card';

const PokeCards = ({ pokeArr, playGame }) => {

  const pokemonCards = pokeArr.map((poke) => (
    <Card
      key={poke.pokeId} 
      poke={poke}
      playGame={playGame}
    />
  ))

  return (
    <div className="cards">
      {pokemonCards}
    </div>
  )
}

export default PokeCards;