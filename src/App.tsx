import React from 'react';
import './index.css';
import { Rock } from './components/Rock';
import { Paper } from './components/Paper';
import { Scissor } from './components/Scissor';
import { Rules } from './components/Rules';
import { Spock } from './components/Spock';
import { Lizard } from './components/Lizard';
import { BonusRules } from './components/BonusRules';
import { Logo } from './components/Logo';
import { BonusLogo } from './components/BonusLogo';

function App() {
  return (
    <div className="App">
      <div className='flex items-center justify-center h-screen w-screen'>
        <BonusRules/>
      </div>
    </div>
  );
}

export default App;
