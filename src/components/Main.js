// Main.js

import React, { useState, useEffect } from 'react';
import PokeScores from './pokeScores/PokeScores';
import PokeCards from './pokeCards/PokeCards';

const Main = () => {

    // const [ array, setArray ] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
    const [ pokeArr, setPokeArr ] = useState([]);

    useEffect(() => {
      const displayCards = async () => {
        setPokeArr(randomize(await fetchPoke(12))) // add randomize here before await?
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
    }
  
    const fetchPoke = async (num) => {
      const pokeArr = []
  
      for (let i = 1; i <= num; i++) {
        const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const response = await fetch(pokeUrl);
        const pokemon = await response.json();
        const pokeId = pokemon.id;
        const pokeName = pokemon.name;
        const pokeImage = pokemon.sprites.front_default;
        pokeArr.push({ pokeId, pokeName, pokeImage });
      }
      console.log(pokeArr);
      return pokeArr;
    }

  return (
    <div className='main'>
      <PokeScores />
      <PokeCards 
        pokeArr={pokeArr}
      />
    </div>
  )
}

export default Main;