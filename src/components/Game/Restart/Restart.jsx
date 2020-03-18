import React from 'react';
import Button from '../../UI/Button.jsx';
import './Restart.css';

const Restart = props => {
  const { result, restartGame } = props;
  let text;

  switch (result) {
    case 1:
      text = 'You win';
      break;
    case 0:
      text = 'Draw'
      break;
    case -1:
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