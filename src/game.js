// look into constructor refactoring with arrow functions

class Game {
  constructor(playerXWins, playerOWins) {
    this.playerX = new Player('X', playerXWins);
    this.playerO = new Player('O', playerOWins);
    this.board = new Array(9);
    this.currentPlayer = this.playerX;
    this.turnCount = 2;
  }

  whosTurn() {
    if (this.turnCount % 2 === 0) {
      this.currentPlayer = this.playerX;
    } else {
      this.currentPlayer = this.playerO;
    }
  }

  placeGamePiece(placementIndex)  {
    this.turnCount++;
    this.board.splice([placementIndex], 1, this.currentPlayer.gamePiece)
    this.currentPlayer.gamePlacements.push(placementIndex); 
  }


  checkWinConditions() {
    if (this.checkVeritcalWin()) {
      return true;
    }
    if (this.checkHorizontalWin()) {
      return true;
    }
    if (this.checkDiagonalWin()) {
      return true;
    }
  }



  checkHorizontalWin() {
    if (this.checkWin("0", "1", "2") || this.checkWin("3", "4", "5") || this.checkWin("6", "7", "8")) {
      return true;
    }
  }

  checkVeritcalWin() {
    if (this.checkWin("0", "3", "6") || this.checkWin("1", "4", "7") || this.checkWin("2", "5", "8")) {
      return true;
    }
  }

  checkDiagonalWin() {
    if (this.checkWin("0", "4", "8") || this.checkWin("2", "4", "6")) {
      return true;
    }
  }

  checkDraw() {
    if (this.turnCount >= 11) {
      return true;
    }
  }

  checkWin(num1, num2, num3) {
    if (this.currentPlayer.gamePlacements.includes(num1) && this.currentPlayer.gamePlacements.includes(num2) && this.currentPlayer.gamePlacements.includes(num3)) {
      this.currentPlayer.wins++;
      this.currentPlayer.saveWinsToStorage();
      return true;
    }
  }
}
 
