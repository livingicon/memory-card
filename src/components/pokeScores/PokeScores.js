// PokeScores.js

import React from 'react'

const PokeScores = ({ currentScore }) => {

  return (
    <div className='scoreboard'>
      <p>Current Score: {currentScore}</p>
      <p>high score</p>
    </div>
  )
}

export default PokeScores;