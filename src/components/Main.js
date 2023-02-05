// Main.js

import React, { useState, useEffect } from 'react';
import PokeScores from './pokeScores/PokeScores';
import PokeCards from './pokeCards/PokeCards';
import { randomize } from '../utilities';

const Main = () => {
  const [ pokeArr, setPokeArr ] = useState([]);
  const [currentScore, setCurrentScore] = useState(0)


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
    setCurrentScore(currentScore + 1);
    setPokeArr(randomize(pokeArr));
    console.log(e.target.id);
  }


  return (
    <div className='main'>
      <PokeScores 
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