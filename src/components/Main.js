// Main.js

import React, { useState, useEffect } from 'react';
import PokeScores from './pokeScores/PokeScores';
import PokeCards from './pokeCards/PokeCards';

const Main = () => {

  const [ pokeArr, setPokeArr ] = useState([]);
  const [currentScore, setCurrentScore] = useState(0)

  useEffect(() => {
    const displayCards = async () => {
      setPokeArr(randomize(await fetchPoke(5))) // add randomize here before await?
    }
    displayCards();
  }, [])

  const randomize = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  const fetchPoke = async (num) => {
    const tempArr = [];
    
    for (let i = 1; i <= num; i++) {
      const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const response = await fetch(pokeUrl);
      const pokemon = await response.json(); //pokemon (all the data)
      const pokeId = pokemon.id;
      const pokeName = pokemon.name;
      const pokeImage = pokemon.sprites.front_default;
      tempArr.push({ pokeId, pokeName, pokeImage });
    }
    return tempArr;
    // setPokeArr(tempArr);
  }

  return (
    <div className='main'>
      <PokeScores 
        currentScore={currentScore}
      />
      {pokeArr && <PokeCards 
        pokeArr={pokeArr} // conditionally render PokeCards
      />}
    </div>
  )
}

export default Main;