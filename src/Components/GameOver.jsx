import React from 'react';

const GameOver = ({winner, rematchHandler}) => {
  return (
    <div id='game-over'>
        <h2>Game Over!</h2>
        {winner && <p>{winner} Won!</p>}
        {!winner && <p>It's a Draw</p>}
        <p>
            <button onClick={rematchHandler}>Rematch!</button>
        </p>
    </div>
  );
}

export default GameOver