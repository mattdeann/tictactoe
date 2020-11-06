//Make an array containing nine spaces
// make a function that will push to correct space depending on player input
// assess whether or not game was won or tied
// switch player who is allowed to run function

class Game {
  constructor(player1, player2, board) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = board || [ , , , , , , , , ,];
  }


  placeGamePiece(player, placementIndex)  {
    this.board.splice([placementIndex], 1, player.gamePiece)
    player.gamePlacements.push(placementIndex);
    this.checkWin();
  }

  checkWin() {
    this.rowWin();
    this.columnWin();
    this.diagonalWin();
    if (this.rowWin() === true || this.columnWin() === true || this.diagonalWin() === true) {
      console.log('Yay you won');
    }
  }

  rowWin() {
    if (this.player.gamePlacements.includes(0) && this.player.gamePlacements.includes(1) && this.player.gamePlacements.includes(2)) {
      player.wins.push(this);
      return true;
    }
    if (player.gamePlacements.includes(3) && player.gamePlacements.includes(4) && player.gamePlacements.includes(5)) {
      player.wins.push(this);
      return true;
    }
    if (player.gamePlacements.includes(6) && player.gamePlacements.includes(7) && player.gamePlacements.includes(8)) {
      player.wins.push(this);
      return true;
    } 
  }

  columnWin(player) {
    if (player.gamePlacements.includes(0) && player.gamePlacements.includes(3) && player.gamePlacements.includes(6)) {
      player.wins.push(this);
    }
    if (player.gamePlacements.includes(1) && player.gamePlacements.includes(4) && player.gamePlacements.includes(7)) {
      player.wins.push(this);
    }
    if (player.gamePlacements.includes(2) && player.gamePlacements.includes(5) && player.gamePlacements.includes(8)) {
      player.wins.push(this);
    } 
  }

  diagonalWin(player) {
    if (player.gamePlacements.includes(0) && player.gamePlacements.includes(4) && player.gamePlacements.includes(8)) {
      player.wins.push(this);
    }
    if (player.gamePlacements.includes(2) && player.gamePlacements.includes(4) && player.gamePlacements.includes(6)) {
      player.wins.push(this);
    }
  }
}





