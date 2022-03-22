function Game() {
  this.towers = [[4,3,2,1],[],[]];
}

Game.prototype.print = function() {
  console.log(JSON.stringify(this.towers));
};

Game.prototype.promptMove = function(callback) {
  this.print();
  let startTowerIndex = Math.floor(Math.random() * this.towers.length);
  let endTowerIndex = Math.floor(Math.random() * this.towers.length);
  while(startTowerIndex === endTowerIndex) {
    endTowerIndex = Math.floor(Math.random() * this.towers.length);
  }
  callback(startTowerIndex, endTowerIndex);
};

Game.prototype.isValidMove = function(startTowerIndex, endTowerIndex){
  let startPiece = this.towers[startTowerIndex][this.towers[startTowerIndex].length - 1];
  let endPiece = this.towers[endTowerIndex][this.towers[endTowerIndex].length - 1];

  if(startPiece === undefined){
    return false;
  }
  else if(endPiece !== undefined && endPiece < startPiece){
    return false;
  }
  else{
    return true;
  }
};

Game.prototype.move = function(startTowerIndex, endTowerIndex){
  if(this.isValidMove(startTowerIndex, endTowerIndex)){
    this.towers[endTowerIndex].push(this.towers[startTowerIndex].pop());
    return true;
  }
  return false;
};

Game.prototype.isWon = function() {
  for(let i = 0; i < this.towers.length-1; i++) {
    if(this.towers[i].length !== 0) {
      return false;
    }
  }
  
  if(this.towers[this.towers.length-1][this.towers[this.towers.length-1].length - 1] === 1) {
    return true;
  }
  else {
    return false;
  }
};

Game.prototype.run = function(completionCallback) {
  this.promptMove((startTowerIndex, endTowerIndex) => {
    if (this.move(startTowerIndex, endTowerIndex)) {
      if(!this.isWon()) {
        this.run(completionCallback);
      }
      else {
        this.print();
        console.log("User has won!");
        completionCallback();
      }
    }
    else {
      console.log("Invalid move, please try again");
      this.run(completionCallback);
    }
  });
};

g = new Game();
g.run(() => {console.log("GAME OVER");});