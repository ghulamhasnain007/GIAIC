

class Animals{
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


class Dogs extends Animals{
    breed! : string
    constructor(name1: string, age1: number, breed1: string){
        super(name1, age1)
        this.breed = breed1
    }

    //Polymorphism  many forms
    //it can be acheive only in inherited classes

    makeSound():void{
        console.log(`${this.name} Bark!`);
    }
}
let dogs = new Dogs("Puppy", 2, "Berk")
console.log(dogs.makeSound());
console.log(dogs.getDetails());