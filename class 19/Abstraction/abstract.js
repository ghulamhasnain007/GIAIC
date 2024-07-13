"use strict";
class Calculator {
    constructor() {
        this.number1 = 3;
    }
}
class Addition extends Calculator {
    constructor() {
        super(...arguments);
        this.number2 = 5;
    }
    add() {
        console.log("Addition method");
    }
}
//cannot create an instance of an object
// let myobj = new Calculator() 
let obj = new Addition();
obj.add();
console.log(obj.number2);
