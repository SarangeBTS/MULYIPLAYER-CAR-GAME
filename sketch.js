var playerCount1;
var database;
var gameState1=0;
var form,player,game,canvas
var allPlayers
var distance=0
var car1,car2,car3,car4,cars



function preload(){
  carImage1=loadImage("images/car1.png")
  carImage2=loadImage("images/car2.png")
  carImage3=loadImage("images/car3.png")
  carImage4=loadImage("images/car4.png")
  trackImage=loadImage("images/track.jpg")
}


function setup(){
  canvas=createCanvas(displayWidth-20,displayHeight-20);

    database=firebase.database();

 game=new GAME()
 game.getState()
 game.start()
}

function draw(){
 if(playerCount1===4){
   game.update(1)
 }
  if(gameState1===1){
    clear()
  game.play()



  }

  if(gameState1===2){
    game.end()
  }
}

/*
.ref means referring to database
.on monitors data
.val extract values from database
.set/.update update value in database
*/