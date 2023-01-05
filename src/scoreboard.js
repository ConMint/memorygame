import React, { useState } from 'react';

function Scoreboard() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(score);

  const updateScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const updateBestScore = () => {
    setBestScore((prevBestScore) => {
      if (score >= prevBestScore) {
        return score;
      } else {
        return prevBestScore;
      }
    });
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div>
      <button onClick={updateScore}>{score}</button>
      <button onClick={updateBestScore}>{bestScore}</button>
      <button onClick={resetScore}>Reset</button>
    </div>
  );
}

export default Scoreboard;
