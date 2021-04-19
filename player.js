class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.leftdistance = 0;
        this.rightdistance = 0;
        this.name = null;
    }
    getcount(){
        var playercountref = database.ref('PlayerCount');
        playercountref.on("value",(data)=>{
            PlayerCount = data.val();
        });
    }
    updatecount(count){
        database.ref('/').update({
            PlayerCount : count
        })
    }
    update(){
        var playerindex = "players/player" + this.index;
        database.ref(playerindex).set({
            name : this.name,
            distance : this.distance,
            rightdistance : this.rightdistance,
            leftdistance : this.leftdistance
        })
    }
    static getplayerinfo(){
        var playerinforef = database.ref('players');
        playerinforef.on("value", (data)=>{
            allplayers = data.val();
        })
    }
}