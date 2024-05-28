import React from 'react';
import './index.css';
import HomeButton from './components/HomeButton';
import GameMode from './components/GameMode';

function App() {
  return (
    <div className="App">
      <HomeButton />
        <div className='flex items-center justify-center h-screen w-screen'>
          <GameMode />
        </div>
    </div>
  );
}

export default App;
