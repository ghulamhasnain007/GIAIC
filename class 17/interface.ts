//Object Oriented Programming

//Four Pillars
//1-Encapsulation    Protecting data
//2-Polymorphism     Differnt behaviors in different instances 
//3-Inheritance      Hiding irrelevant data
//4-Abstraction      One property of object is acquiring another property of object


type Person = {
    name: string;
    age: number;
    isStudent: boolean;
}

interface Person1{
    readonly name: string;
    age:number;
    isStudent: boolean;
}

type Human = {
    isAlive : boolean;
}

type Human1 = Person & Person1

interface Person2 extends Person1{
    age: number
    disability: boolean
}

let riaz:Person2 = {
    name: "riaz",
    age: 18,
    isStudent: true,
    disability: false
}

// riaz.name = "Bilal"  Error: readonly property
//we cannot assign single premetive file in interface

