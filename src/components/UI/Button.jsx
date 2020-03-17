import React from 'react';
import './Button.css';
import close from '../../images/icon-close.svg';

const Button = props => {
  const { name, openModal } = props;


  return(
    <button className={`button button--${name}`} onClick={openModal}>
      {name === 'close' ? <img src={close} alt='exit'/> : name}
    </button>
  )
}

export default Button