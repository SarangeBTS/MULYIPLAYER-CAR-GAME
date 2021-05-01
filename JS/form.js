class FORM{
    constructor(){
   this.input=createInput("Enter name")
   this.playButton=createButton("Click to start")
   this.greeting=createElement('h3')
   this.reset=createButton("RESET")
    }
     hide1(){
    this.input.hide()
    this.playButton.hide()
    this.greeting.hide()
        
     }
    display(){
     var title=createElement('h2')
     title.html("Car racing game")
     title.position(displayWidth/2-50,0)

     
    this.input.position(displayWidth/2-40,displayHeight/2-80)
    this.playButton.position(displayWidth/2+40,displayHeight/2)
    this.reset.position(displayWidth/2,displayHeight-20)

     this.playButton.mousePressed(()=>{
         this.input.hide()
        this. playButton.hide()
         player.name=this.input.value()
         playerCount1=playerCount1+1
         player.index=playerCount1
         player.update()
         player.updateCount(playerCount1)
         
         this.greeting.html("Hello "  +player.name)
         this.greeting.position(displayWidth/2-100,displayHeight/4)


     })
     this.reset.mousePressed(()=>{
       game.update(0)  
      player.updateCount(0)
      PLAYER.updateCarsAtEnd(0)

     })

    }
}