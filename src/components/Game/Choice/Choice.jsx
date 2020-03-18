import React from 'react';
import ButtonIcon from '../icon-button/icon-button';
import './Choice.css';

const Choice = props => {
  const { icon, bot, className, shadow } = props;

  return(
    <div className='result-icon'>
      {icon === null ? <div className='result-circle'/> : <ButtonIcon className={className} icon={icon} />}
      {shadow && <div className='result-shadow' />}
      <p className='result-text'>
        {bot ? 'The house picked' : 'You picked'}
      </p>
    </div>
  )
}

export default Choice;