class Game {
  constructor(playerXWins, playerOWins) {
    this.playerX = new Player('X', playerXWins);
    this.playerO = new Player('O', playerOWins);
    this.board = [ , , , , , , , , ,];
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

  checkWin() {
    if (this.checkWinConditions("0", "1", "2") || this.checkWinConditions("3", "4", "5") || this.checkWinConditions("6", "7", "8") || this.checkWinConditions("0", "3", "6") || this.checkWinConditions("1", "4", "7") || this.checkWinConditions("2", "5", "8") || this.checkWinConditions("0", "4", "8") || this.checkWinConditions("2", "4", "6"))
    {
      return true;
    }  
  }

  updateWinCounter() {
    xWins.innerText = `${this.playerX.wins} wins`;
    oWins.innerText = `${this.playerO.wins} wins`;
  }

  checkDraw() {
    if (this.turnCount >= 11) {
      titleBox.innerText = (`DRAW! YOU BOTH LOSE!`);
      setTimeout(resetBoard, 1500);
      return true;
    }
  }

  checkWinConditions(num1, num2, num3) {
    if (this.currentPlayer.gamePlacements.includes(num1) && this.currentPlayer.gamePlacements.includes(num2) && this.currentPlayer.gamePlacements.includes(num3)) {
      this.currentPlayer.wins++;
      this.updateWinCounter();
      titleBox.innerText = (`Looks like ${this.currentPlayer.gamePiece} is the winner!`);
      this.currentPlayer.saveWinsToStorage();
      setTimeout(resetBoard, 1500);
      return true;
    }
  }
}





