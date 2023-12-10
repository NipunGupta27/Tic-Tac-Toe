
const GameBoard = ({ onSelectSquare, board }) => {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // const handleGameBoard = (row, cell) => {
  //     setGameBoard(
  //         prevBoard => {
  //             const updatedGameBoard = [...prevBoard.map((innerArray)=>[...innerArray])];
  //             updatedGameBoard[row][cell]= activePlayerSymbol;
  //             return updatedGameBoard;
  //     });
  //     onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol != null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
