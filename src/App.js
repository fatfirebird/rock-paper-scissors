import React from 'react';
import ScoreContainer from './components/Score/ScoreContainer';
import GameContainer from './components/Game/GameContainer';
import RulesContainer from './components/Rules/RulesContainer';
import './index.css'

const App = () => {
  return(
    <main className='main-container'>
      <ScoreContainer />
      <GameContainer />
      <RulesContainer />
    </main>
  )
}

export default App;
