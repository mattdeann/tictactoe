//Make an array containing nine spaces
// make a function that will push to correct space depending on player input
// assess whether or not game was won or tied
// switch player who is allowed to run function

var gameBoard = document.querySelector(".game-board");


gameBoard.addEventListener('click', updateGameBoard);

class Game {
  constructor(player1, player2, board) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = board || [ , , , , , , , , ,];
    this.currentPlayer = this.player1;
    this.turnCount = 2;
  }

  whosTurn() {
    if (this.turnCount % 2 === 0) {
      this.currentPlayer = this.player1;
    } else {
      this.currentPlayer = this.player2;
    }
    this.turnCount++;
  }


  placeGamePiece(placementIndex)  {
    this.whosTurn();
    this.board.splice([placementIndex], 1, this.currentPlayer.gamePiece)
    this.currentPlayer.gamePlacements.push(placementIndex);
    this.checkWin();
  }

  checkWin() {
    if (this.rowWin() === true || this.columnWin() === true || this.diagonalWin() === true) {
      console.log(`Looks like ${this.currentPlayer.gamePiece} is the winner!`);
    }
  }

  rowWin() {
    if (this.currentPlayer.gamePlacements.includes(0) && this.currentPlayer.gamePlacements.includes(1) && this.currentPlayer.gamePlacements.includes(2)) {
      this.currentPlayer.wins.push(this);
      return true;
    }
    if (this.currentPlayer.gamePlacements.includes(3) && this.currentPlayer.gamePlacements.includes(4) && this.currentPlayer.gamePlacements.includes(5)) {
      this.currentPlayer.wins.push(this);
      return true;
    }
    if (this.currentPlayer.gamePlacements.includes(6) && this.currentPlayer.gamePlacements.includes(7) && this.currentPlayer.gamePlacements.includes(8)) {
      this.currentPlayer.wins.push(this);
      return true;
    } 
  }

  columnWin() {
    if (this.currentPlayer.gamePlacements.includes(0) && this.currentPlayer.gamePlacements.includes(3) && this.currentPlayer.gamePlacements.includes(6)) {
      this.currentPlayer.wins.push(this);
      return true;
    }
    if (this.currentPlayer.gamePlacements.includes(1) && this.currentPlayer.gamePlacements.includes(4) && this.currentPlayer.gamePlacements.includes(7)) {
      this.currentPlayer.wins.push(this);
      return true;
    }
    if (this.currentPlayer.gamePlacements.includes(2) && this.currentPlayer.gamePlacements.includes(5) && this.currentPlayer.gamePlacements.includes(8)) {
      this.currentPlayer.wins.push(this);
      return true;
    } 
  }

  diagonalWin() {
    if (this.currentPlayer.gamePlacements.includes(0) && this.currentPlayer.gamePlacements.includes(4) && this.currentPlayer.gamePlacements.includes(8)) {
      this.currentPlayer.wins.push(this);
      return true;
    }
    if (this.currentPlayer.gamePlacements.includes(2) && this.currentPlayer.gamePlacements.includes(4) && this.currentPlayer.gamePlacements.includes(6)) {
      this.currentPlayer.wins.push(this);
      return true;
    }
  }

  updateGameBoard() {
    
  }
}





