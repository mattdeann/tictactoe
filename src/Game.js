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
    if (this.rowWin() || this.columnWin() || this.diagonalWin()) {
      this.updateWinCounter();
      titleBox.innerText = (`Looks like ${this.currentPlayer.gamePiece} is the winner!`);
      this.currentPlayer.saveWinsToStorage();
      setTimeout(resetBoard, 1500);
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

//NEXT 3 FUNCTIONS REFACTOR???

  rowWin() {
    if (this.currentPlayer.gamePlacements.includes("0") && this.currentPlayer.gamePlacements.includes("1") && this.currentPlayer.gamePlacements.includes("2")) {
      this.currentPlayer.wins++;
      return true;
    }

    if (this.currentPlayer.gamePlacements.includes("3") && this.currentPlayer.gamePlacements.includes("4") && this.currentPlayer.gamePlacements.includes("5")) {
      this.currentPlayer.wins++;
      return true;
    }

    if (this.currentPlayer.gamePlacements.includes("6") && this.currentPlayer.gamePlacements.includes("7") && this.currentPlayer.gamePlacements.includes("8")) {
      this.currentPlayer.wins++;
      return true;
    } 
  }

  columnWin() {
    if (this.currentPlayer.gamePlacements.includes("0") && this.currentPlayer.gamePlacements.includes("3") && this.currentPlayer.gamePlacements.includes("6")) {
      this.currentPlayer.wins++;
      return true;
    }

    if (this.currentPlayer.gamePlacements.includes("1") && this.currentPlayer.gamePlacements.includes("4") && this.currentPlayer.gamePlacements.includes("7")) {
      this.currentPlayer.wins++;
      return true;
    }

    if (this.currentPlayer.gamePlacements.includes("2") && this.currentPlayer.gamePlacements.includes("5") && this.currentPlayer.gamePlacements.includes("8")) {
      this.currentPlayer.wins++;
      return true;
    } 
  }

  diagonalWin() {
    if (this.currentPlayer.gamePlacements.includes("0") && this.currentPlayer.gamePlacements.includes("4") && this.currentPlayer.gamePlacements.includes("8")) {
      this.currentPlayer.wins++;
      return true;
    }

    if (this.currentPlayer.gamePlacements.includes("2") && this.currentPlayer.gamePlacements.includes("4") && this.currentPlayer.gamePlacements.includes("6")) {
      this.currentPlayer.wins++;
      return true;
    }
  }
}





