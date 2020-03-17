import React from 'react';
import GameContainer from './GameContainer/GameContainer.jsx';
import GameResults from './GameResults/GameResults.jsx';

const Game = props => {
  const { playerChoice, computerChoice, pickIcon } = props;

  return(
    <React.Fragment>
      {
        !playerChoice 
        ?
        <GameContainer pickIcon={pickIcon}/>
        :
        <GameResults computerIcon={computerChoice} playerIcon={playerChoice}/>
      }
    </React.Fragment>
  )
}

export default Game;