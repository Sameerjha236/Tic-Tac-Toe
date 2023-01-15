import { useState } from 'react';
import './App.css';
import AImatch from './components/Aimatch';
import TwoPlayer from './components/TwoPlayer';


function App() {
  const [phase, setPhase] = useState(1);

  function phase1() {
    setPhase(1);
  }
  function phase2() {
    setPhase(2);
  }
  function phase3() {
    setPhase(3);
  }
  function phase4() {
    setPhase(4);
  }

  return (
    <div className="container">
      <div className="title">Tic Tac Toe </div>
      {(phase === 1) && (
        <div onClick={phase2} className='new_game'>Start A New Game</div>
      )
      }
      {(phase === 2) && (
        <div>
          <div className='mode'>Choose Mode</div>
          <div onClick={phase3} className='options'>One Player</div>
          <div onClick={phase4} className='options'>Two Player</div>
        </div>
      )
      }
      {(phase === 3) && (
        <div className='new-game'>
          <div onClick={phase1} className='wrapper-button'>New Game</div>
          <div className='right-wrapper'>
            <AImatch />
          </div>
        </div>
      )
      }
      {(phase === 4) && (
        <div className='new-game'>
          <div onClick={phase1} className='wrapper-button'>New Game</div>
          <div className='right-wrapper'>
            <TwoPlayer />
          </div>
        </div>
      )
      }
    </div>
  );
}

export default App;
