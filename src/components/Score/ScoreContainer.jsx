import React from 'react'
import UserScore from './UserScore/UserScore'
import logo from '../../images/logo-bonus.svg';
import './ScoreContainer.css'

const ScoreContainer = () => {
  return(
    <div className='score-container'>
      <img className='score-container__logo' src={logo} alt='rock paper scissors lizard spock'></img>
      <UserScore />
    </div>
  )
}

export default ScoreContainer