import React from 'react';
import './GameContainer.css'
import ButtonIcon from '../icon-button/icon-button';

const GameContainer = props => {
  const { pickIcon } = props;

  return (
    <div className='game-container'>
        <div className='game-row game-row--first'>
          <ButtonIcon pickIcon={pickIcon} icon='scissors' />
        </div>
        <div className='game-row game-row--second'>
          <ButtonIcon pickIcon={pickIcon} icon='spock' />
          <ButtonIcon pickIcon={pickIcon} icon='paper' />
        </div>
        <div className='game-row game-row--third'>
          <ButtonIcon pickIcon={pickIcon} icon='lizard' />
          <ButtonIcon pickIcon={pickIcon} icon='rock' />
        </div>
    </div>
  )
}

export default GameContainer