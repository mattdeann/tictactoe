var game = new Game();
var gameBoard = document.querySelector(".game-board");
var titleBox = document.querySelector("h2");
var xWins = document.querySelector(".x-wins");
var oWins = document.querySelector(".o-wins");

gameBoard.addEventListener('click', updateGameBoard);


//click board
//take id that is index and run placeGamePiece function
//if array includes the index, dont run function but return alert
//
//update DOM based on game.board


function updateGameBoard(event) {
  var clickedIndex = event.target.closest("ul").id;
  
  game.placeGamePiece(clickedIndex)
  event.target.closest("ul").innerText = game.currentPlayer.gamePiece;
  game.checkWin();
}