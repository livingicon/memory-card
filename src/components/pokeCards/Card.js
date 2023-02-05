// Card.js

import React from 'react';

const Card = ({ poke }) => {

  return (
    <div>
      <img src={poke.pokeImage} alt={poke.pokeName} />
    </div>

  )
}

export default Card;