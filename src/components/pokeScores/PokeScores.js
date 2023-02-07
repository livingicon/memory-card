// PokeScores.js

import React from 'react'

const PokeScores = ({ currentScore, highScore }) => {

  return (
    <div className="scoreBoard">
      <h2>Score Board</h2>
      <p>Current Score: {currentScore}</p>
      <p>High Score: {highScore}</p>
    </div>
  )
}

export default PokeScores;