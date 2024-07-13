abstract class Calculator{
    number1: number = 3
    abstract number2: number;

    abstract add() : void
}

class Addition extends Calculator{
    number2: number = 5
    add(): void{
        console.log("Addition method");
    }
}

//cannot create an instance of an object
// let myobj = new Calculator() 
let obj = new Addition()
obj.add()
console.log(obj.number2);
