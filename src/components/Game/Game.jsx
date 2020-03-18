import React from 'react';
import GameContainer from './GameContainer/GameContainer.jsx';
import GameResults from './GameResults/GameResults.jsx';

const Game = props => {
  const { playerChoice, computerChoice, pickIcon, restartGame, winner } = props;

  return(
    <React.Fragment>
      {
        !playerChoice 
        ?
        <GameContainer pickIcon={pickIcon}/>
        :
        <GameResults winner={winner} restartGame={restartGame} computerIcon={computerChoice} playerIcon={playerChoice}/>
      }
    </React.Fragment>
  )
}

export default Game;