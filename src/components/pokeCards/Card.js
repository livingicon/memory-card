// Card.js

import React from 'react';

const Card = ({ poke, playGame }) => {

  return (
    // should I change className to pokeID?
    <div className={poke.pokeName} onClick={playGame} >
      <img src={poke.pokeImage} alt={poke.pokeName} className={poke.pokeName}/>
      <p className={poke.pokeName}>{poke.pokeName}</p>
    </div>

  )
}

export default Card;