

var gameState = 0;
var playerCount;
var database;
var player;
var game;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  database = firebase.database ()
  game = new Game()
  game.getState()
  game.start()
   
 
}

function draw() {
  background(255,255,255); 

}