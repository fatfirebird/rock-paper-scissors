import React from 'react';
import Choice from '../Choice/Choice.jsx';
import Restart from '../Restart/Restart.jsx';
import './GameResults.css';

const GameResult = props => {
  const { playerIcon, computerIcon, compare, restartGame } = props;

  const createChoices = () => 
    [playerIcon, computerIcon].map((value, id) => 
      <Choice icon={value} bot={!!id} key={id} className='icon--result'/>
    )

  const result = compare(); 

  return(
    <div className='results-container'>
      {createChoices()}
      {
        computerIcon && <Restart result={result} restartGame={restartGame}/>
      }
    </div>
  )
}

export default GameResult;