// Cards.js

import React, { useState } from 'react';

const Cards = () => {

  const [ pokeArr, setPokeArr ] = useState(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
 
  const randomize = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
 
  const shuffleArr = () => {
    setPokeArr(pokeArr.concat(randomize(pokeArr)))
  }
  return (
    <div className="cards">
      <div>{pokeArr}</div>
      <button onClick={shuffleArr}>Shuffle Array</button>
    </div>
  )
}

export default Cards;