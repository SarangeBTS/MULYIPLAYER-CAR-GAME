class PLAYER{

    constructor(){
this.index=null
this.distance=0
this.name=null
this.rank=null
    }


getCount(){
    var playerCountRef=database.ref('playerCount')
    playerCountRef.on("value",function(data){
    playerCount1=data.val()
  })
}
updateCount(count){
database.ref('/').update({
    playerCount:count
})
}
update(){
    var playerIndex="players/player"+this.index
database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance
})
}

static getPlayerInfo(){
    var lemon=database.ref('players')
    lemon.on("value",(data)=>{
 allPlayers=data.val()
    })
}


 getCarsAtEnd(){
    var lemon=database.ref('CarsAtEnd')
    lemon.on("value",(data)=>{
     this.rank=data.val()   
    })
}

static updateCarsAtEnd(rank){
database.ref('/').update({
    CarsAtEnd:rank
})
  }
}