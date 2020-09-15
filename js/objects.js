// Instantiate my objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
var e1 = new Enemy(50, 60);
var e2 = new Enemy(100, 143)
var e3 = new Enemy(70, 226);
var e4 = new Enemy(250, 226+83);

var allEnemies = [e1,e2,e3,e4];

var g1 = new Gem(32 + 202, 60, 'images/Heart.png', 'heart');
var g2 = new Gem(32, 52 + 83, 'images/Gem-Blue.png', 'blue');
var g3 = new Gem(32 + 101, 52+83, 'images/Gem-Orange.png', 'orange');
var g4 = new Gem(32 + 303, 52+83, 'images/Gem-Green.png', 'green');
var g5 = new Gem(32 + 404, 52+83, 'images/Gem-Orange.png', 'orange');
var g6 = new Gem(32 + 101, 52 + 83*2, 'images/Star.png', 'star');
var g7 = new Gem(32 + 303, 52 + 83*2, 'images/Gem-Blue.png', 'blue');
var g8 = new Gem(32 + 505, 52 + 83*2, 'images/Gem-Green.png', 'green');
var g9 = new Gem(32, 52 + 83*3, 'images/Gem-Green.png', 'green');
var g10 = new Gem(32 + 303, 52 + 83*3, 'images/Star.png', 'Star');
var g11 = new Gem(32 + 404, 52 + 83*3, 'images/Gem-Orange.png', 'orange');
var g12 = new Gem(32 + 606, 52 + 83*3, 'images/Gem-Blue.png', 'blue');
var g13 = new Gem(32 + 101, 52 + 83*4, 'images/Gem-Blue.png', 'blue');
var g14 = new Gem(32 + 202, 52 + 83*4, 'images/Star.png', 'star');
var g15 = new Gem(32 + 303, 52 + 83*4, 'images/Gem-Orange.png', 'orange');
var g16 = new Gem(32 + 606, 52 + 83*4, 'images/Star.png', 'star');
var g17 = new Gem(32 + 505, 52, 'images/Gem-Green.png', 'green');
var g18 = new Gem(32 + 606, 52, 'images/Star.png', 'star');

var allGems = [g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14,g15,g16,g17,g18];

var player = new Player(303, 407, null);

var r1 = new Rock(32 + 202, 52 + 83);
var r2 = new Rock(32 + 606, 52 + 83);
var r3 = new Rock(32, 52 + 83*2);
var r4 = new Rock(32 + 404, 52 + 83*2);
var r5 = new Rock(32 + 202, 52 + 249);
var r6 = new Rock(32, 52 + 83*4);
var r7 = new Rock(32 + 404, 52 + 83*4);
var r8 = new Rock(32 + 505, 52 + 83*4);
var r9 = new Rock(32, 52);
var r10 = new Rock(32 + 303, 52 );


var allRocks = [r1, r2, r3, r4, r5, r6, r7,r8,r9,r10];
