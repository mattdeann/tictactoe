var Jack = new Player(1, 'X');
var Diane = new Player(2, 'O');

var game1 = new Game(Jack, Diane);

game1.placeGamePiece(game1.player1, 3);
game1.placeGamePiece(game1.player2, 6);
game1.placeGamePiece(game1.player1, 4);
game1.placeGamePiece(game1.player2, 8);
game1.placeGamePiece(game1.player1, 5);
