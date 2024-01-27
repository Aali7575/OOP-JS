//my class for  y animals 

class Animal{
    static alive = true;
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`This ${this.name} is eating.`);
    }

}

x = new Animal("rabbit");

console.log(x);