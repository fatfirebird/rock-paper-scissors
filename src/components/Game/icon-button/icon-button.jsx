import React from 'react';
import scissors from '../../../images/icon-scissors.svg'
import rock from '../../../images/icon-rock.svg';
import paper from '../../../images/icon-paper.svg';
import spock from '../../../images/icon-spock.svg';
import lizard from '../../../images/icon-lizard.svg';
import './icon-button.css'

const ButtonIcon = props => {
  const { icon } = props;
  let image;

  switch (icon) {
    case 'rock':
      image = rock;
      break;
      
    case 'paper':
      image = paper;
      break;
    
    case 'spock':
      image = spock;
      break;
      
    case 'lizard':
      image = lizard;
      break;

    case 'scissors':
      image = scissors;
      break;

    default:
      break;
  }

  return(
    <div className={`icon ${icon}`}>
      <img className='image' src={image} alt='icon'/>
    </div>
  )
}

export default ButtonIcon