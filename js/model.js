// Enemies our player must avoid
var Enemy = function(speed, initY) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.speed = speed;
    this.x = 0;
    this.y = initY;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed * dt;
    if (this.x >= 606)
      this.x = 0;
    if ((player.x - 61) < this.x && this.x < (player.x + 61) &&
    (player.y - 98) < this.y && this.y < (player.y + 68) ){
      //alert("lol you lose");
      player.x = player.initLoc[0];
      player.y = player.initLoc[1];
      player.score = 0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write the player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(initX, initY, img) {
  this.sprite = img;
  this.x = initX;
  this.y = initY;
  this.initLoc = [initX, initY];
  this.score = 0;
  this.win = false;
};

Player.prototype.update = function() {
  //the method handleInput will update the location of player
};

Player.prototype.render = function() {
  ctx.clearRect(0, 0, 500, 50)
  ctx.font = '30pt Impact';
  ctx.textAlign = 'center';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 3;
  ctx.fillStyle = 'white';

  var scoreText = "Your Score: " + this.score.toString();
  ctx.fillText(scoreText, 130, 40);
  ctx.strokeText(scoreText, 130, 40);

  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
  var xLoc = this.x;
  var yLoc = this.y;
  var checkRock = function(xDir, yDir) {
      var result = false;
      allRocks.forEach(function(r){
        if ((xLoc + xDir) > (r.x - 32 - 50) && (xLoc + xDir) < (r.x - 32 + 50) && (yLoc + yDir) > (r.y - 60 - 40)
        && (yLoc + yDir) < (r.y - 60 + 40)){
            result = true;
          }
      });
      return result;
    };
  if (direction === 'left' && this.x >= 101 && !checkRock(-101, 0)){
    this.x = this.x - 101;
  }else if (direction === 'up' && this.y >= 60 && !checkRock(0, -83)){
    this.y = this.y - 83;
  }else if (direction === 'right' && this.x <= 505 && !checkRock(101, 0)){
    this.x = this.x + 101;
  }else if (direction === 'down' && this.y <= 475 && !checkRock(0, 83)){
    this.y = this.y + 83;
  }
  if (this.y >= 324 && this.y < 407)
    player.setLoc(this.x, this.y);
};

Player.prototype.setChar = function(char) {
  if (char === 1 && !this.sprite){
    this.sprite = 'images/char-boy.png';
  }else if (char === 2 && !this.sprite){
    this.sprite = 'images/char-cat-girl.png';
  }else if (char === 3 && !this.sprite){
    this.sprite = 'images/char-horn-girl.png';
  }else if (char === 4 && !this.sprite){
    this.sprite = 'images/char-pink-girl.png';
  }else if (char === 5 && !this.sprite){
    this.sprite = 'images/char-princess-girl.png';
  }
};

Player.prototype.setLoc = function (x, y){
  this.x = x;
  this.y = y;
};

var Gem = function (x, y, img, type) {
  this.x = x;
  this.y = y;
  this.sprite = img;
  this.isCollected = false;
  this.addToScore = false;
  this.type = type;
};

Gem.prototype.render = function() {
    if (!this.isCollected)
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 40, 60);
};

Gem.prototype.update = function (){
    if ( player.x > (this.x - 32 - 50) && player.x < (this.x - 32 + 50) && player.y > (this.y - 60 - 40) && player.y < (this.y - 60 + 40)){
      this.isCollected = true;
      if (this.type === 'heart')
          player.win = true;
    }
    if (this.isCollected){
      if (!this.addToScore) {
        switch (this.type){
          case 'blue':
            player.score+=10;
            break;
          case 'green':
            player.score+=20;
            break;
          case 'orange':
            player.score+=30;
            break;
          case 'star':
            player.score+=100;
        }
        this.addToScore = true;
      }
    }

};

var Rock = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/Rock.png';
};

Rock.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 40, 60);
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
