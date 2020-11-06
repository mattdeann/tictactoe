class Player {
  constructor(playerNumber, gamePiece, gamePlacements, wins) {
    this.playerNumber = playerNumber;
    this.gamePiece = gamePiece;
    this.gamePlacements = gamePlacements || [];
    this.wins = wins || [];
  }
}

