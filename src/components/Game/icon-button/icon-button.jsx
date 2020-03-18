import React from 'react';
import scissors from '../../../images/icon-scissors.svg'
import rock from '../../../images/icon-rock.svg';
import paper from '../../../images/icon-paper.svg';
import spock from '../../../images/icon-spock.svg';
import lizard from '../../../images/icon-lizard.svg';
import './icon-button.css'

const ButtonIcon = props => {
  const { icon, pickIcon, className } = props;
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
    <React.Fragment>
      {
        pickIcon 
        ?
          <div className={`icon ${icon}`} onClick={() => pickIcon(icon)} >
            <img className='image' src={image} alt='icon' />
          </div>
        :
          <div className={`icon ${icon} ${className}`} >
            <img className='image' src={image} alt='icon' />
          </div>
      }
    </React.Fragment>
  )
}

export default ButtonIcon