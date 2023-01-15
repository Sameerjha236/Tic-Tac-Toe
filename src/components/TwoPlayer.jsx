import { useEffect, useState } from 'react';
import Square from './Square';

const initialState = ["", "", "", "", "", "", "", "", ""];

function TwoPlayer() {
  const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
  const [gameState, setgameset] = useState(initialState);
  const [steps, setsteps] = useState(0);
  const [winner, setwinner] = useState(null);
  useEffect(() => {
    checkWinner(gameState)
  }, [gameState])

  const OnclickHandler = (event) => {
    if (!event.target.innerText) {
      const tempState = [...gameState];
      tempState[event.target.id] = steps % 2 === 0 ? 'X' : 'O';
      setsteps(steps + 1);
      setgameset(tempState);
    }
    else {
      audio.play();
    }
  }

  const restartGame = () => {
    setgameset(initialState);
    setsteps(0);
    setwinner(null);
  }

  const checkWinner = (gameState) => {
    const winningCondition = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]
    winningCondition.forEach(condition => {
      const [a, b, c] = condition;

      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        setwinner(gameState[a]);
      }
    })
  }

  return (
    <div className="phase-container">
      <div className="left-wrapper">
        <div className="wrapper-button" onClick={restartGame}>
          Reset game
        </div>
      </div>
      {(!winner && steps <= 8) && (
        <div className="right-wrapper">
          <div className="players">
            <div className={`player ${steps % 2 === 0 && "player-X"}`}>Player-X</div>
            <div className={`player ${steps % 2 === 1 && "player-O"}`}>Player-O</div>
          </div>
          <div className="game-wrapper" onClick={OnclickHandler}>
            <Square id={0} state={gameState[0]} className="border-right-bottom" />
            <Square id={1} state={gameState[1]} className="border-right-bottom" />
            <Square id={2} state={gameState[2]} className="border-bottom" />
            <Square id={3} state={gameState[3]} className="border-right-bottom" />
            <Square id={4} state={gameState[4]} className="border-right-bottom" />
            <Square id={5} state={gameState[5]} className="border-bottom" />
            <Square id={6} state={gameState[6]} className="border-right" />
            <Square id={7} state={gameState[7]} className="border-right" />
            <Square id={8} state={gameState[8]} />
          </div>
        </div>)
      }
      {(winner || steps === 9) && (
        <div className='winnerWrapper'>
          {/* <img src={require('./winner.png')} alt="Confeti" className='confeti' /> */}
          <div className="winner-text">{steps === 9 && !winner ? "It's a Draw" : `${winner} Win!`}</div>
        </div>
      )}
    </div>
  );
}

export default TwoPlayer;
