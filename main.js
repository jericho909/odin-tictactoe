const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    const render = () => {
      const cells = document.querySelectorAll(".cell");
      cells.forEach((cell, index) => {
        cell.textContent = board[index];
      });
    };
    const checkWin = () => {
        const winPatterns = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
          [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
          [0, 4, 8], [2, 4, 6] // Diagonals
        ];
      
        for (const pattern of winPatterns) {
          const [a, b, c] = pattern;
          if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a] === player1.marker ? player1 : player2; // Return the winning player
          }
        }
      
        return null; // No winner
      };
      
      const checkTie = () => {
        for (const cell of board) {
          if (cell === "") {
            return false;
          }
        }
        return true;
      };

      const switchPlayers = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
      };
      
      const handleMove = (index) => {
        if (board[index] === "") { // Check if the cell is empty
          board[index] = currentPlayer.marker; // Mark the cell with the current player's marker
          gameBoard.render(); // Update the game board on the screen
          if (checkWin()) {
            // Someone won, show a message or update the display
            console.log(currentPlayer.name + " wins!");
          } else if (checkTie()) {
            // It's a tie, show a message or update the display
            console.log("It's a tie!");
          }
          switchPlayers(); // Switch to the other player's turn
        }
        
      };
    return {
      board,
      render,
      handleMove,
    };
  })();
  
  const Player = (name, marker) => {
    return {
      name,
      marker
    };
  };
  
  const player1 = Player("Player 1", "X");
  const player2 = Player("Player 2", "O");
  
  let currentPlayer = player1; // Initialize current player
  
  const cells = document.querySelectorAll(".cell"); // Find all cell elements
  
  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
      gameBoard.handleMove(index); // Call handleMove when a cell is clicked
    });
  });
  
  const startButton = document.getElementById("start-button");
  
  startButton.addEventListener("click", () => {
    gameBoard.render();
  });
  
  
  
  
  