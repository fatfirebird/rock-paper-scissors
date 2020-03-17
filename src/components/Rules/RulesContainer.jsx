import React from 'react';
import Button from '../UI/Button';
import './RulesContainer.css'

const RulesContainer = props => {
  const { openModal } = props;

  return (
    <div className='button-container'>
      <Button name='rules' openModal={openModal}/>
    </div>
  )
}

export default RulesContainer