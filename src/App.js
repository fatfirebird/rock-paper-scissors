import React, { useState } from 'react';
import ScoreContainer from './components/Score/ScoreContainer';
import GameContainer from './components/Game/GameContainer';
import RulesContainer from './components/Rules/RulesContainer';
import Modal from './components/Modal/Modal';
import './index.css'

const App = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    if (modal) return setModal(false);
    return setModal(true);
  }

  return(
    <main className='main-container'>
      <ScoreContainer />
      <GameContainer />
      <RulesContainer openModal={openModal}/>
      {
        modal
        &&
        <Modal openModal={openModal}/>
      }
    </main>
  )
}

export default App;
