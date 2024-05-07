import React from 'react';
import './index.css';
import { Rock } from './components/Rock';
import { Paper } from './components/Paper';
import { Scissor } from './components/Scissor';
import { Rules } from './views/Rules';
import { Spock } from './components/Spock';
import { Lizard } from './components/Lizard';
import { BonusRules } from './views/BonusRules';
import { Logo } from './components/Logo';
import { BonusLogo } from './components/BonusLogo';

function App() {
  return (
    <div className="App">
      <div className='flex items-center justify-center h-screen w-screen'>
        <Rules />
      </div>
    </div>
  );
}

export default App;
