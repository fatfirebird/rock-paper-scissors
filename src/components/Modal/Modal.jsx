import React from 'react'
import img from '../../images/image-rules-bonus.svg';
import Button from '../UI/Button';
import './Modal.css'

const Modal = props => {
  const { openModal } = props;

  return (
    <div className='layout'>
      <div className='modal'>
        <h2 className='modal__header'>Rules</h2>
        <img className='modal__rules' src={img} alt='rules' />
        <Button className='modal__button' name='close' openModal={openModal} />
      </div>
    </div>
  )
}

export default Modal