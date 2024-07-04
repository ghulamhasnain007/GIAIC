//Inheritance

class Animal{
    constructor(animalName:string, animalAge:number){
         this.name = animalName;
        this.age= animalAge;
    }
    name!: string;
    age!: number;

    makeSound():void{
        console.log(`${this.name} make sound!`);
    }

    getDetails():void{
        console.log(`The Detailed of Animal:
            Name of Animal is ${this.name}
            Age of Animal is ${this.age}`);
    }
}


class Dog extends Animal{
    breed! : string
    constructor(name1: string, age1: number, breed1: string){
        super(name1, age1)
        this.breed = breed1
    }
}
let dog = new Dog("Puppy", 2, "Berk")
console.log(dog.makeSound());
console.log(dog.getDetails());