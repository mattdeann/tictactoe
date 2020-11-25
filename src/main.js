//Query Selectors
const gameBoard = document.querySelector(".game-board");
const titleBox = document.querySelector(".main-header");
const xWins = document.querySelector(".x-wins");
const oWins = document.querySelector(".o-wins");

//Global Variables
let game = new Game();

//Event Listeners
gameBoard.addEventListener('mouseup', updateGameBoard);
window.onload = loadSavedPlayers();

//Functions
function updateGameBoard(event) {
  let click = event.target.closest("ul").id;

  if (!game.playerX.gamePlacements.includes(click) && !game.playerO.gamePlacements.includes(click)) {
    game.placeGamePiece(click)
    event.target.closest("ul").innerText = game.currentPlayer.gamePiece;
  }
  
  if (!game.checkWinConditions() && !game.checkDraw()) {
    game.whosTurn();
    titleBox.innerText = `${game.currentPlayer.gamePiece} to move!`
    return;
  } else if (game.checkDraw()) {
    titleBox.innerText = (`DRAW! YOU BOTH LOSE!`);
  } else if (game.checkWinConditions()) {
   titleBox.innerText = (`${game.currentPlayer.gamePiece} WINS`);
  } 
  gameBoard.classList.add("disable-click");
  setTimeout(resetBoard, 1500);
}

function resetBoard() {
  game = new Game(game.playerX.wins, game.playerO.wins);
  const clearBoard = `
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
  </ul>`;

  gameBoard.classList.remove("disable-click");
  titleBox.innerText = `${game.currentPlayer.gamePiece} to move!`
  gameBoard.innerHTML = clearBoard;
}

function loadSavedPlayers() {
  game.playerX.retrieveWinsFromStorage();
  game.playerO.retrieveWinsFromStorage();
  updateWinCounter();
}

function updateWinCounter() {
  xWins.innerText = `${game.playerX.wins} wins`;
  oWins.innerText = `${game.playerO.wins} wins`;
} 