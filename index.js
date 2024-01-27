// Create a class that has class/static properties and methods. Show how to use/access them.

class Player {
    //static property to hold total score
    static totalScore = 0;


    //constrctor 
    constructor (name){
        this.name = name;
        this.score = 0;
    }
    //method to add player's score 
    addScore(points){
        this.score += points;
        Player.toString += points;
    }
    //static method to display total score
    static displayScore(){
        console.log(`Total Score: ${Player.totalScore}`);
    
    }

}
//Create a player
 