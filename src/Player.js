class Player {
  constructor(gamePiece, wins) {
    this.gamePiece = gamePiece;
    this.gamePlacements = [];
    this.wins = wins || 0;
  }

  saveWinsToStorage() {
    localStorage.setItem(`${this.gamePiece}`, JSON.stringify(this));
  }

  //take players on page load
  //put them in the freakin function bro!

  retrieveWinsFromStorage() {
    var retrievedPlayer = JSON.parse(localStorage.getItem(`${this.gamePiece}`));
    this.wins = retrievedPlayer.wins
  }
}

