import React from 'react';
import GameContainer from './GameContainer/GameContainer.jsx';
import GameResults from './GameResults/GameResults.jsx';

const Game = props => {
  const { playerChoice, computerChoice, pickIcon, compare, restartGame } = props;

  return(
    <React.Fragment>
      {
        !playerChoice 
        ?
        <GameContainer pickIcon={pickIcon}/>
        :
        <GameResults restartGame={restartGame} compare={compare} computerIcon={computerChoice} playerIcon={playerChoice}/>
      }
    </React.Fragment>
  )
}

export default Game;