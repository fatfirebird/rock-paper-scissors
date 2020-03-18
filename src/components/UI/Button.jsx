import React from 'react';
import './Button.css';
import close from '../../images/icon-close.svg';

const Button = props => {
  const { name, onClick } = props;
  let text;
  name === 'rules' ? text = 'Rules' : text = 'Play again';

  return(
    <button className={`button button--${name}`} onClick={onClick}>
      {name === 'close' ? <img src={close} alt='exit'/> : text}
    </button>
  )
}

export default Button