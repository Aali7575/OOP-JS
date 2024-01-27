class Human {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
}
}

// firstperson =  new Human("Tafadzwa", 22, "Zimbabwe");
// console.log(firstperson);

// secondperson = new Human("Samantha",17, "Zimbabwe");
// console.log(secondperson(this.name));


//tryna learn about static
class Player {
    static tax = 0.005;
    constructor(name, position, country, price){
        
        this.name = name;
        this.position = position;
        this.country = country;
        this.price = price;
    }
    Total(price){
        console.log(`Our player: ${this.name} is going for ${this.price * Player.tax}`)
}
}

player1 = new Player("Tafadzwa", 7, "Zimbabwe", 8000)
console.log(player1)
player1.Total();