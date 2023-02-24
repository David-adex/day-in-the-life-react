// Importing the CSS for the board
import "./css/board.css";

// Importing the useState hook, useEffect hook and useRef hook
import { useState, useEffect, useRef } from "react";

const Board = ({ reset, setReset, winner, setWinner }) => {
  // Creating a turn state, which indicates the current turn
  const [turn, setTurn] = useState(0);

  // Creating a data state, which contains the
  // current picture of the board
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

  // Creating a reference for the board
  const boardRef = useRef(null);

  // Function to draw on the board
  const draw = (event, index) => {};

  // UseEffect hook used to reset the board whenever
  // a winner is decided
  useEffect(() => {}, [reset, setReset, setWinner]);

  // useEffect hook used to check for a winner
  useEffect(() => {
    // Checks for the win condition in rows
    const checkRow = () => {};

    // Checks for the win condition in cols
    const checkCol = () => {};

    // Checks for the win condition in diagonals
    const checkDiagonal = () => {};

    // Checks if at all a win condition is present
    const checkWin = () => {
      return checkRow() || checkCol() || checkDiagonal();
    };

    // Checks for a tie
    const checkTie = () => {};

    // Setting the winner in case of a win
    if (checkWin()) {
      setWinner(turn === 0 ? "Player 2 Wins!" : "Player 1 Wins!");
    } else if (checkTie()) {
      // Setting the winner to tie in case of a tie
      setWinner("It's a Tie!");
    }
  });

  return <div ref={boardRef} className="board"></div>;
};

export default Board;
