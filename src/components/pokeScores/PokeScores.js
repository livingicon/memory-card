// PokeScores.js

import React from 'react'

const PokeScores = ({ currentScore, highScore }) => {

  return (
    <div className="score">
      <h2 id="scoreTitle">Score Board</h2>
      <p id="currentScore">Current Score: {currentScore}</p>
      <p id="highScore">High Score: {highScore}</p>
    </div>
  )
}

export default PokeScores;