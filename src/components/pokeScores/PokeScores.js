// PokeScores.js

import React from 'react'

const PokeScores = ({ currentScore, highScore }) => {

  return (
    <div className='scoreboard'>
      <p>Current Score: {currentScore}</p>
      <p>High Score: {highScore}</p>
    </div>
  )
}

export default PokeScores;