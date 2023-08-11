const gameBoard = (() => {
  let gameActive = true;
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
        return true; 
      }
    }
  
    return false; 
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

  const displayMessage = (message) => {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
  };
      
  const handleMove = (index) => {
    if (board[index] === "" && gameActive) { 
      board[index] = currentPlayer.marker;
      gameBoard.render();
      
      if (checkWin()) {
        gameActive = false; 
        displayMessage(`${currentPlayer.name} wins!`);
        gameActive = false;
        startButton.textContent = "Restart"; 

      } else if (checkTie()) {
        gameActive = false; 
        displayMessage("It's a tie!");
        gameActive = false;
        startButton.textContent = "Restart"; 
      } else {
        switchPlayers();
      }
    }
  };

  const updatePlayerNames = () => {
    player1.name = document.getElementById("player1-name").value || "Player 1";
    player2.name = document.getElementById("player2-name").value || "Player 2";
  };

  const resetBoard = () => {
    const board = ["", "", "", "", "", "", "", "", ""];
  }

  const toggleGameActive = () => {
    gameActive = !gameActive;
    return gameActive;
  };
     
  return {
    board,
    render,
    handleMove,
    updatePlayerNames,
    toggleGameActive,
    displayMessage,
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
  
let currentPlayer = player1;
  
const cells = document.querySelectorAll(".cell");
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    gameBoard.handleMove(index); 
   });
});
  
const startButton = document.getElementById("start-button");
const gameboard = document.getElementById("game-board");
startButton.addEventListener("click", () => {
  gameboard.style.display = "grid";
  gameBoard.updatePlayerNames();
  gameBoard.render();
});



 
  
  
  
  
  