"use strict";
// console.log("Hello World");
// let myName: string | null
// myName = null
// console.log(myName);
// myName = "Hasnain"
// console.log(myName);
// let myAge : string | number
// myAge = 16
// console.log(myAge);
// myAge = "Sixteen"
// console.log(myAge);
// console.log(myAge.toString());
// console.log(myAge.toLowerCase());
let newAge = Math.random() > 0.6 ? "Khan" : 60;
if (newAge === "Khan") {
    console.log(newAge.toUpperCase());
}
if (typeof newAge === "string") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
typeof newAge === "string"
    ? newAge.toUpperCase() // Ok: string
    : newAge.toFixed(); // Ok: number
let age;
age = 60;
age = "died";
age = "unknown";
// age = "sixty"//Error
let yourName = Math.random() > 0.6 ? "Hasnain" : undefined;
if (yourName) {
    console.log(yourName.toUpperCase());
}
// console.log(yourName.toLowerCase);//possibly undefined so it cannot print wto condition
