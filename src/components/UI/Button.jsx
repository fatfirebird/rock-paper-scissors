import React from 'react';
import './Button.css';


const Button = props => {
  const { name } = props;
  
  return(
    <button className={`button button--${name}`}>{props.name}</button>
  )
}

export default Button