import React, { useState, useEffect } from 'react';
import Card from './card';

function Gameboard() {
  const cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [yes, setYes] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  //////

  useEffect(
    () => console.log('re-render because x changed:', bestScore),
    [bestScore]
  );

  const resetScore = () => {
    setScore(0);
  };

  function handleClick(num) {
    if (yes.includes(num) === false) {
      shuffle(cardArray);
      setYes([...yes, num]);
      setScore((prevScore) => prevScore + 1);
      if (score >= bestScore) {
        setBestScore((prevScore) => prevScore + 1);
      }
    } else {
      shuffle(cardArray);
      setScore(0);
      setYes([]);
      alert('your score was ' + score);
      if (score >= bestScore) {
        setBestScore(score);
      }
    }
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  shuffle(cardArray);

  return (
    <div>
      <div>
        <button>Current Score: {score}</button>
        <button>High Score: {bestScore}</button>
        <button onClick={resetScore}>Reset</button>
      </div>
      {cardArray.map((num) => (
        <Card
          title={num}
          key={num * (score + 1)}
          onclick={() => handleClick(num)}
        ></Card>
      ))}
    </div>
  );
}

export default Gameboard;
