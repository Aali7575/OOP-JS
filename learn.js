//Using ES6+ classes, prepare code that computes descriptive statistics. 
//Use the refreshment below to refresh your memory.
//i. The measures of central tendency: 3 of them 


// 

class Scores {
    constructor(math, english, shona){
        this.math = math;
        this.english = english;
        this.shona = shona;
    }
    aver(){
        console.log(`Your average score is ${(this.english + this.shona + this.math)/ 3}`);
    }
}