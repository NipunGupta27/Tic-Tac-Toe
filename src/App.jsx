import { useState } from "react";
import GameBoard from "./Components/GameBoard";
import Players from "./Components/Players";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./Components/WINNING_COMBINATIONS";
import GameOver from "./Components/GameOver";

const INITIAL_PLAYERS = {
  X: "Player 1",
  O: "Player 2",
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedWinner(gameBoard, players){
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      return winner = players[firstSquareSymbol];
    }
  }
}

function derivedGameBoard(gameTurns){
  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function derivedActiveState(gameTurn) {
  let currentPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") currentPlayer = "O";
  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState(INITIAL_PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivedActiveState(gameTurns);
  const gameBoard = derivedGameBoard(gameTurns);
  const winner = derivedWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  const handleActivePlayer = (rowIndex, colIndex) => {
    setGameTurns((prevTurn) => {
      let currentPlayer = derivedActiveState(prevTurn);
      let updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurns;
    });
  };
  const handleRematch = () => {
    setGameTurns([]);
  };

   function handlePlayerName(symbol, newName) {
     setPlayers((prevPlayers) => {
       return {
         ...prevPlayers,
         [symbol]: newName,
       };
     });
   }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players
            iname={INITIAL_PLAYERS.X}
            symbol="X"
            isActive={activePlayer === "X" ? "active" : undefined}
            onNameChange={handlePlayerName}
          />
          <Players
            iname={INITIAL_PLAYERS.O}
            symbol="O"
            isActive={activePlayer === "O" ? "active" : undefined}
            onNameChange={handlePlayerName}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} rematchHandler={handleRematch} />
        )}
        <GameBoard onSelectSquare={handleActivePlayer} board={gameBoard} />
      </div>
      <Log logs={gameTurns} />
    </main>
  );
}

export default App;
