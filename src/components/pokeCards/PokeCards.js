// Cards.js

import React from 'react';

const pokeCards = (props) => {

  const CardsGrid = ({ pokemArr }) => {
    const pokemonCards = pokeArr.map((pokemon) => (
      <Card key={pokemon.id} pokemon={pokemon} />
    ))
  }

  return (
    {pokemonCards}
  )

}

export default pokeCards;