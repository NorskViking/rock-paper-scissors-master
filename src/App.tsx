import React from 'react';
import './index.css';
import RPS_GAME from './rps/RPS_GAME';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";

function App() {

  /** 
   //Change game-mode between Rock, Paper, Scissor and Rock, Paper, Scissor, Spock, Lizard
  const getGameMode = () => {

  }
  */

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <div className='flex items-center justify-center h-screen w-screen'>
          <Route path="/" element={<RPS_GAME />} />
        </div>
      </Routes>
    </div>
  );
}

export default App;
