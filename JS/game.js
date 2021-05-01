class GAME{
    constructor(){

    }


    getState(){
        var getStateRef=database.ref('gameState')
        getStateRef.on("value",function(data){
          gameState1=data.val()
        })
    }

    update(abc){
    database.ref('/').update({
      gameState:abc
    })
    }

    start(){
      if(gameState1===0){

      player=new PLAYER()
      player.getCount()
       form=new FORM()
       form.display()
      }

      car1=createSprite(200,200)
      car1.addImage(carImage1)
      car2=createSprite(400,200)
      car2.addImage(carImage2)
      car3=createSprite(600,200)
      car3.addImage(carImage3)
      car4=createSprite(800,200)
      car4.addImage(carImage4)
      cars=[car1,car2,car3,car4]
    }
    play(){
          form.hide1();
          PLAYER.getPlayerInfo();
          player.getCarsAtEnd
          if(allPlayers !== undefined){
              background(rgb(96, 87, 87))
            //var display_position = 100;
            image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)

            //index of the array
            var index = 0;
            //x and y position of the cars
            var x = 150;
            var y;
            for(var plr in allPlayers){
              //add 1 to the index for every loop
              index = index + 1 ;
              //position the cars a little away from each other in x direction
              x = x + 200;
              //use data form the database to display the cars in y direction
              y = displayHeight - allPlayers[plr].distance;
              cars[index-1].x = x;
              cars[index-1].y = y;
              if (index === player.index){
      fill("purple")
             ellipse(x,y,60,60)
      
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y
              }
             
              //textSize(15);
              //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
            }
          }
          if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=10
            player.update();
          }
      if(player.distance>3500){
        gameState1=2
        player.rank+=1
        PLAYER.updateCarsAtEnd(player.rank)

      }
          drawSprites();
        }

      end(){
        console.log("gameEnded")
        console.log(player.rank)
      }
}

