// Card.js

import React from 'react';

const Card = ({ poke, clickPokeCard }) => {

  return (
    <div id={poke.pokeName} onClick={clickPokeCard} >
      <img src={poke.pokeImage} alt={poke.pokeName} />
      <p>{poke.pokeName}</p>
    </div>

  )
}

export default Card;