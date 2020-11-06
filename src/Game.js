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
    debugger
    this.board.splice([placementIndex], 1, player.gamePiece)
    player.gamePlacements.push(placementIndex);
        console.log(player.gamePlacements);
    var winCheck = player.gamePlacements.join("")
    if (player.gamePlacements.includes(0) && player.gamePlacements.includes(1) && player.gamePlacements.includes(2)) {
      console.log(`Player 1 wins!`);
    }
    
    }
  }





