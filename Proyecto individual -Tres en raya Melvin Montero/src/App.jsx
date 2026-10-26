import { useState } from 'react';
import './App.css';

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winningLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  function calculateWinner(squares) {
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((square) => square !== null);

  function handleClick(i) {
    if (board[i] || winner) return;

    const newBoard = board.slice();
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  let status;
  if (winner) {
    status = `¡Felicidades! Ganó el jugador: ${winner === 'X' ? 'Capitaleño (X)' : 'Campesino (O)'} Que Duro 🇩🇴`;
  } else if (isDraw) {
    status = '¡Esto quedó trizado, Empate mi gente! 😎';
  } else {
    status = `Turno de: ${xIsNext ? 'Jugador Capitaleño (X)' : 'Jugador Campesino (O)'}`;
  }

  return (
    <div className="game-container">
      <h1>Tres en Raya Republica Dominicana</h1>
      <div className="status">{status}</div>

      <div className="board">
        {board.map((value, i) => (
          <button key={i} className="square" onClick={() => handleClick(i)}>
            {value}
          </button>
        ))}
      </div>

      <button className="reset-button" onClick={resetGame}>
        Reiniciar Partida
      </button>
    </div>
  );
}