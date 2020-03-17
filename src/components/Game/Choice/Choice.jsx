import React from 'react';
import ButtonIcon from '../icon-button/icon-button';
import './Choice.css';

const Choice = props => {
  const { icon, bot } = props;

  return(
    <div className='result-icon'>
      {icon === null ? <div className='result-circle'/> : <ButtonIcon icon={icon} />}
      <p className='result-text'>
        {bot ? 'The house picked' : 'You picked'}
      </p>
    </div>
  )
}

export default Choice;