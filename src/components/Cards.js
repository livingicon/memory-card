// Cards.js

import React, { useState, useEffect } from 'react';

const Cards = () => {

  // const [ pokeArr, setPokeArr ] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
  const [ pokeArr, setPokeArr ] = useState([]);

  useEffect(() => {
    const loadCards = async () => {
      setPokeArr(await fetchPoke(6)) // add randomize here before await?
    }
    loadCards()
  }, [])

  // const randomize = (arr) => {
  //   for (let i = arr.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = arr[i];
  //     arr[i] = arr[j];
  //     arr[j] = temp;
  //   }
  // }

  const fetchPoke = async (num) => {
    const pokemons = []

    for (let i = 1; i <= num; i++) {
      const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const response = await fetch(pokeUrl);
      const pokemon = await response.json();
      console.log(pokemon);
      
    //   const id = pokemon.id;
    //   const name = pokemon.name;
    //   const image = pokemon.sprites.front_default;
    //   pokemons.push({ id, name, image });
    }

    return pokemons
  }
 
  // const shuffleArr = () => {
  //   setPokeArr(pokeArr.concat(randomize(pokeArr)))
  // }

  return (
    <div className="cards">
      {/* <div>{pokeArr}</div>
      <button onClick={shuffleArr}>Shuffle Array</button> */}
      <button onClick={fetchPoke}>Console PokeAPI</button>
    </div>
  )
}

export default Cards;