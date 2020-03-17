import React from 'react';
import Choice from '../Choice/Choice.jsx';
import './GameResults.css';

const GameResult = props => {
  const { playerIcon, computerIcon } = props;

  const createChoices = () => [playerIcon, computerIcon].map((value, id) => <Choice icon={value} bot={!!id} key={id}/>)

  return(
    <div className='results-container'>
      {createChoices()}
    </div>
  )
}

export default GameResult;