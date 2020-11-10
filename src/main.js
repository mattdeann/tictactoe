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
  if(game.checkWin()) {
   resetBoard();
  };
}

function resetBoard() {
  console.log(game.playerX.wins);
  game = new Game(game.playerX.wins, game.playerO.wins);
  gameBoard.innerHTML = `<ul class="square top-left" id="0">
  </ul>
  <ul class="square top-center" id="1">
  </ul>
  <ul class="square top-right" id="2">
  </ul>
  <ul class="square middle-left" id="3">
  </ul>
  <ul class="square middle-center" id="4">
  </ul>
  <ul class="square middle-right" id="5">  
  </ul>
  <ul class="square bottom-left" id="6">
  </ul>
  <ul class="square bottom-center" id="7">
  </ul>
  <ul class="square bottom-right" id="8">
  </ul>`

}