"use strict";
class Animals {
    constructor(animalName, animalAge) {
        this.name = animalName;
        this.age = animalAge;
    }
    makeSound() {
        console.log(`${this.name} make sound!`);
    }
    getDetails() {
        console.log(`The Detailed of Animal:
            Name of Animal is ${this.name}
            Age of Animal is ${this.age}`);
    }
}
class Dogs extends Animals {
    constructor(name1, age1, breed1) {
        super(name1, age1);
        this.breed = breed1;
    }
    //Polymorphism  many forms
    //it can be acheive only in inherited classes
    makeSound() {
        console.log(`${this.name} Bark!`);
    }
}
let dogs = new Dogs("Puppy", 2, "Berk");
console.log(dogs.makeSound());
console.log(dogs.getDetails());
