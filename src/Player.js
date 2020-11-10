class Player {
  constructor(gamePiece, wins) {
    this.gamePiece = gamePiece;
    this.gamePlacements = [];
    this.wins = wins || 0;
  }

  saveWinsToStorage() {
    localStorage.setItem(`${this.gamePiece}`, JSON.stringify(this));
  }


  retrieveWinsFromStorage() {
    var retrievedPlayer = JSON.parse(localStorage.getItem(`${this.gamePiece}`));
    if (retrievedPlayer === null) {
      this.wins = 0;
    } else {
      this.wins = retrievedPlayer.wins
    }
  }
}

