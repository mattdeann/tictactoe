var gameBoard = document.querySelector(".game-board");
var titleBox = document.querySelector("h2");
var xWins = document.querySelector(".x-wins");
var oWins = document.querySelector(".o-wins");
var game = new Game();


gameBoard.addEventListener('click', updateGameBoard);


function updateGameBoard(event) {
  var clickedIndex = event.target.closest("ul").id;
  
  game.placeGamePiece(clickedIndex)
  event.target.closest("ul").innerText = game.currentPlayer.gamePiece;
  
  if (!game.checkWin() && !game.checkDraw()) {
    game.whosTurn();
    titleBox.innerText = `${game.currentPlayer.gamePiece} to move`
  }
}
  

function resetBoard() {
  game = new Game(game.playerX.wins, game.playerO.wins);

  //BETTER WAY TO RESET INNERHTML???

  gameBoard.innerHTML = `
  <ul class="square top-left" id="0">
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