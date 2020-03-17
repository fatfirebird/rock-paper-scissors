import React from 'react';
import './GameContainer.css'
import ButtonIcon from './icon-button/icon-button';

const GameContainer = () => {
  return (
    <div className='game-container'>
      <div className='game-row game-row--first'>
        <ButtonIcon icon='scissors'/>
      </div>
      <div className='game-row game-row--second'>
        <ButtonIcon icon='spock' />
        <ButtonIcon icon='paper' />
      </div>
      <div className='game-row game-row--third'>
        <ButtonIcon icon='lizard' />
        <ButtonIcon icon='rock' />
      </div>
    </div>
  )
}

export default GameContainer