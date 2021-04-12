var canva;
var gameState=0;
var contestantCount;
var database;
var quiz;
var question;
var contestant;


function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();
  gameState=new Game();
  game.getState();
  game.start();
}


function draw(){
  background("pink");

  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
  

