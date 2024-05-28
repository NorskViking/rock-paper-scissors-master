import React from 'react';
import './index.css';
import RPS_GAME from './rps/RPS_GAME';
import RPSSL_GAME from './rpssl/RPSSL_GAME';
import HomeButton from './components/HomeButton';
import GameMode from './components/GameMode';

function App() {

  /** 
   //Change game-mode between Rock, Paper, Scissor and Rock, Paper, Scissor, Spock, Lizard
  const getGameMode = () => {

  }
  */

  return (
    <div className="App">
      <HomeButton />
      <GameMode />
        <div className='flex items-center justify-center h-screen w-screen'>
          <RPSSL_GAME />
        </div>
    </div>
  );
}

export default App;
