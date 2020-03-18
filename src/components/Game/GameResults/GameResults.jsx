import React from 'react';
import Choice from '../Choice/Choice.jsx';
import Restart from '../Restart/Restart.jsx';
import './GameResults.css';

const GameResult = props => {
  const { playerIcon, computerIcon, compare, restartGame } = props;

  const createChoices = () => 
    [playerIcon, computerIcon].map((value, id) => 
      <Choice icon={value} bot={!!id} key={id}/>
    )

  const result = compare(); 
  
  let style;
  if (!computerIcon) style = {
    marginBottom: 180 + 'px',
  }

  return(
    <div className='results-container' style ={style}>
      {createChoices()}
      {
        computerIcon && <Restart result={result} restartGame={restartGame}/>
      }
    </div>
  )
}

export default GameResult;