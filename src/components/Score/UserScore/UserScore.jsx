import React from 'react';
import './UserScore.css';

const UserScore = props => {
  const { score } = props;

  return (
    <div className='user-score'>
      <p className='user-score__text'>score</p>
      <h3 className='user-score__value'>{score}</h3>
    </div>
  )
}

export default UserScore