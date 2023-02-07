// Main.js

import React, { useState, useEffect } from 'react';
import PokeScores from './pokeScores/PokeScores';
import PokeCards from './pokeCards/PokeCards';
import { randomize } from '../utilities';

const Main = () => {
  const [pokeArr, setPokeArr] = useState([]);
  const [memorized, setMemorized] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const displayCards = async () => {
      setPokeArr(randomize(await fetchPoke(25)))
    }
    displayCards();
  }, [])


  const fetchPoke = async (num) => {
    const pokeArr = [];
    for (let i = 1; i <= num; i++) {
      const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const response = await fetch(pokeUrl);
      const pokemon = await response.json();
      const pokeId = pokemon.id;
      const pokeName = pokemon.name;
      const pokeImage = pokemon.sprites.front_default;
      pokeArr.push({ pokeId, pokeName, pokeImage });
    }
    return pokeArr;
  }

  const playGame = (e) => {
    shuffleDisplay();
    if (memorized.filter(poke => (poke.pokeName === e.target.id)).length === 0) {
      setMemorized(memorized.concat(pokeArr[pokeArr.findIndex((poke) => 
        (poke.pokeName === e.target.id))]));
      incrementScore();
      incrementHighScore();
    } else {
      setNewGame();
    }
  }

  // playGame Helpers
  const shuffleDisplay = () => setPokeArr(randomize([...pokeArr]));
  const incrementScore = () => setCurrentScore(currentScore + 1);
  const incrementHighScore = () => (currentScore >= highScore) ? 
    setHighScore(highScore + 1) : null;
  const setNewGame = () => {
    setCurrentScore(0);
    setMemorized([]);
  }

  return (
    <div className="main">
      <div className="scoreBoard">
        <PokeScores 
          highScore={highScore}
          currentScore={currentScore}
        />
      </div>
      <div className="gameBoard">
        <PokeCards 
          pokeArr={pokeArr}
          playGame={playGame}
        />
      </div>
    </div>
  )
}

export default Main;