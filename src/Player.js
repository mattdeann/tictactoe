class Player {
  constructor(gamePiece, wins) {
    this.gamePiece = gamePiece;
    this.gamePlacements = [];
    this.wins = wins || 0;
  }


  //when player wins, push updated players to local storage

  saveWinsToStorage() {
    localStorage.setItem(`${this.gamePiece}`, JSON.stringify(this));
  }

  //take players on page load
  //put them in the freakin function bro!

  retrieveWinsFromStorage() {

  }
}

