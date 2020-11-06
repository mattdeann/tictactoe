class Player {
  constructor(playerNumber, gamePiece, gamePlacements, wins) {
    this.playerNumber = playerNumber;
    this.gamePiece = gamePiece || 'X';
    this.gamePlacements = gamePlacements || [];
    this.wins = wins || [];
  }
}

