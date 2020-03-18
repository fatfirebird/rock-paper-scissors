import React from 'react';
import Choice from '../Choice/Choice.jsx';
import Restart from '../Restart/Restart.jsx';
import './GameResults.css';

const GameResult = props => {
  const { playerIcon, computerIcon, restartGame, winner } = props;

  const createChoices = () => 
    [playerIcon, computerIcon].map((value, id) => {
      if (winner === 'player' && id === 0) {
        return <Choice icon={value} bot={!!id} key={id} className='icon--result' shadow={!!winner} />
      } else
      if (winner === 'computer' && id === 1) {
        return <Choice icon={value} bot={!!id} key={id} className='icon--result' shadow={!!winner} />
      }
       else {
        return <Choice icon={value} bot={!!id} key={id} className='icon--result' shadow={false} />
      }
    })

  return(
    <div className='results-container'>
      {createChoices()}
      {
        computerIcon && <Restart result={winner} restartGame={restartGame}/>
      }
    </div>
  )
}

export default GameResult;