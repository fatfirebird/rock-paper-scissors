import React from 'react';
import Button from '../UI/Button';
import './RulesContainer.css'

const RulesContainer = props => {
  const { openModal, result} = props;

  return (
    <React.Fragment>
      {
        result 
        ?
        <div className='button-container button-container--result'>
          <Button name='rules' onClick={openModal} />
        </div>
        :
        <div className='button-container'>
          <Button name='rules' onClick={openModal} />
        </div>
      }
    </React.Fragment>

  )
}

export default RulesContainer