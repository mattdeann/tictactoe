//Make an array containing nine spaces
// make a function that will push to correct space depending on player input
// assess whether or not game was won or tied
// switch player who is allowed to run function


class Game {
  constructor(board) {
    this.playerX = new Player('X');
    this.playerO = new Player('O');
    this.board = board || [ , , , , , , , , ,];
    this.currentPlayer = this.playerX;
    this.turnCount = 2;
  }

  

  whosTurn() {
    if (this.turnCount % 2 === 0) {
      this.currentPlayer = this.playerX;
    } else {
      this.currentPlayer = this.playerO;
    }

    this.turnCount++;
  }

  resetBoardOnDraw() {
    alert("Its a draw");
    this.playerX = new Player('X');
    this.playerO = new Player('O');
    this.board = [ , , , , , , , , ,];
    this.currentPlayer = this.playerX;
    this.turnCount = 2;
  }



  placeGamePiece(placementIndex)  {
    this.whosTurn();
    this.board.splice([placementIndex], 1, this.currentPlayer.gamePiece)
    this.currentPlayer.gamePlacements.push(placementIndex);
    if (this.turnCount >= 11) {
      this.resetBoardOnDraw();
    }
  }

  checkWin() {
    if (this.rowWin() === true || this.columnWin() === true || this.diagonalWin() === true) {
      titleBox.innerText = (`Looks like ${this.currentPlayer.gamePiece} is the winner!`);
    

    }
  }

  rowWin() {
    if (this.currentPlayer.gamePlacements.includes("0") && this.currentPlayer.gamePlacements.includes("1") && this.currentPlayer.gamePlacements.includes("2")) {
      this.currentPlayer.wins.push(this);
      return true;
    }
    if (this.currentPlayer.gamePlacements.includes("3") && this.currentPlayer.gamePlacements.includes("4") && this.currentPlayer.gamePlacements.includes("5")) {
      this.currentPlayer.wins.push(this);
      return true;
    }
    if (this.currentPlayer.gamePlacements.includes("6") && this.currentPlayer.gamePlacements.includes("7") && this.currentPlayer.gamePlacements.includes("8")) {
      this.currentPlayer.wins.push(this);
      return true;
    } 
  }

  columnWin() {
    if (this.currentPlayer.gamePlacements.includes("0") && this.currentPlayer.gamePlacements.includes("3") && this.currentPlayer.gamePlacements.includes("6")) {
      this.currentPlayer.wins.push(this);
      return true;
    }
    if (this.currentPlayer.gamePlacements.includes("1") && this.currentPlayer.gamePlacements.includes("4") && this.currentPlayer.gamePlacements.includes("7")) {
      this.currentPlayer.wins.push(this);
      return true;
    }
    if (this.currentPlayer.gamePlacements.includes("2") && this.currentPlayer.gamePlacements.includes("5") && this.currentPlayer.gamePlacements.includes("8")) {
      this.currentPlayer.wins.push(this);
      return true;
    } 
  }

  diagonalWin() {
    if (this.currentPlayer.gamePlacements.includes("0") && this.currentPlayer.gamePlacements.includes("4") && this.currentPlayer.gamePlacements.includes("8")) {
      this.currentPlayer.wins.push(this);
      return true;
    }
    if (this.currentPlayer.gamePlacements.includes("2") && this.currentPlayer.gamePlacements.includes("4") && this.currentPlayer.gamePlacements.includes("6")) {
      this.currentPlayer.wins.push(this);
      return true;
    }
  }

  updateGameBoard(event) {
    debugger
    console.log(event.target.closest("ul"));
    event.target.closest("ul").innerText = this.currentPlayer.gamePiece;
  }
}





