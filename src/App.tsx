import React from 'react';
import './index.css';
import RPS_GAME from './rps/RPS_GAME';
import Navbar from './components/Navbar';

function App() {

  /** 
   //Change game-mode between Rock, Paper, Scissor and Rock, Paper, Scissor, Spock, Lizard
  const getGameMode = () => {

  }
  */

  return (
    <div className="App">
      <Navbar />
      <div className='flex items-center justify-center h-screen w-screen'>
        <RPS_GAME />
      </div>
    </div>
  );
}

export default App;
