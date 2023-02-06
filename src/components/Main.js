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
      setPokeArr(randomize(await fetchPoke(12)))
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

  const clickPokeCard = (e) => {
  // consider breaking up? playround function or something? More useEffect?
    setPokeArr(randomize([...pokeArr])); // shuffles display
    if (memorized.filter(poke => (poke.pokeName === e.target.className)).length === 0) { // if it's not memorized already
      setMemorized(memorized.concat(pokeArr[pokeArr.findIndex((poke) => (poke.pokeName === e.target.className))])); //add to array
      setCurrentScore(currentScore + 1);
      if (currentScore >= highScore) { // why equal to make it not one behind?
        setHighScore(highScore + 1);
      }
    } else {
      setNewGame();
    }
  }

  const setNewGame = () => {
    setCurrentScore(0);
    setMemorized([]);
  }


  return (
    <div className='main'>
      <PokeScores 
        highScore={highScore}
        currentScore={currentScore}
      />
      <PokeCards 
        pokeArr={pokeArr}
        clickPokeCard={clickPokeCard}
      />
    </div>
  )
}

export default Main;