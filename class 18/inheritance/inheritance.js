"use strict";
//Inheritance
class Animal {
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
class Dog extends Animal {
    constructor(name1, age1, breed1) {
        super(name1, age1);
        this.breed = breed1;
    }
}
let dog = new Dog("Puppy", 2, "Berk");
console.log(dog.makeSound());
console.log(dog.getDetails());
