// Card.js

import React from 'react';

const Card = ({ poke, clickPokeCard }) => {

  return (
    // should I change className to pokeID?
    <div className={poke.pokeName} onClick={clickPokeCard} >
      <img src={poke.pokeImage} alt={poke.pokeName} className={poke.pokeName}/>
      <p className={poke.pokeName}>{poke.pokeName}</p>
    </div>

  )
}

export default Card;