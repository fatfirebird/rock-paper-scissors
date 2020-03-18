import React from 'react';
import Button from '../../UI/Button.jsx';
import './Restart.css';

const Restart = props => {
  const { result, restartGame } = props;
  let text;

  switch (result) {
    case 'player':
      text = 'You win';
      break;
    case 'draw':
      text = 'Draw'
      break;
    case 'computer':
      text = 'You lose'
      break;
    default:
      text = 'Popados'
      break;
  }

  return(
    <div className='restart-container'>
      <p className='restart__text'>{text}</p>
      <Button name='restart' onClick={restartGame}/>
    </div>
  )  
}

export default Restart;