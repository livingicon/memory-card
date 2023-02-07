// Card.js

import React from 'react';

const Card = ({ poke, playGame }) => {

  return (
    <div className="card" id={poke.pokeName} onClick={playGame} >
      <img src={poke.pokeImage} alt={poke.pokeName} id={poke.pokeName}/>
      <p className="cardTitle" id={poke.pokeName}>{poke.pokeName}</p>
    </div>

  )
}

export default Card;