import React, { useState, useEffect } from 'react';
import ScoreContainer from './components/Score/ScoreContainer';
import RulesContainer from './components/Rules/RulesContainer';
import Modal from './components/Modal/Modal';
import Game from './components/Game/Game';
import './index.css'

const App = () => {
  const [modal, setModal] = useState(false);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState();

  useEffect(() => {
    setTimeout(() => {
      if (playerChoice) return randomizeChoice();
    }, 1000);

    const randomizeChoice = () => {
      const possibleValues = ['scissors', 'lizard', 'rock', 'paper', 'spock'];
      const random = getRandom(5);
      return setComputerChoice(possibleValues[random]);
    }

  }, [playerChoice]);

  useEffect(() => {   
    const prevScore = +localStorage.getItem('score');
    const result = compare();
    const newScore = prevScore + result;
    localStorage.setItem('score', newScore);
    setScore(newScore);
    chooseWinner(result);
  }, [computerChoice])

  const compare = () => {
    if (computerChoice === playerChoice) return 0;

    const rules = {
      'paper': ['rock', 'spock'],
      'rock': ['scissors', 'lizard'],
      'lizard': ['spock', 'paper'],
      'spock': ['scissors', 'rock'],
      'scissors': ['paper', 'lizard'],
    }

    let result = rules[playerChoice].map(value => value === computerChoice);
    if (!result.includes(true)) return -1;
    return 1;
  }

  const openModal = () => {
    if (modal) return setModal(false);
    return setModal(true);
  }

  const getRandom = max => Math.floor(Math.random() * Math.floor(max));

  const restartGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
  }

  const chooseWinner = result => {
    if (result === 1) return setWinner('player');
    if (result === 0) return setWinner('draw');
    return setWinner('computer')
  }

  return(
    <main className='main-container'>
      <ScoreContainer score={score}/>
      <Game 
        winner={winner}
        restartGame={restartGame} 
        computerChoice={computerChoice} 
        playerChoice={playerChoice} 
        pickIcon={setPlayerChoice}
      />
      <RulesContainer result={!!computerChoice} openModal={openModal}/>
      {
        modal
        &&
        <Modal openModal={openModal}/>
      }
    </main>
  )
}

export default App;
