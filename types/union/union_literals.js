"use strict";
// let myName: string | null
// myName = null
// console.log(myName);
// myName = "hasnain"
// console.log(myName);
// let myAge: number | string
// myAge = "Don't Know"
// setTimeout(() => {
//     myAge = 20
// }, 1000)
// console.log(myAge.toString());//can be called on both string or number
// console.log(myAge.toLowerCase());// only called on string
// let newAge = Math.random() > 0.6 ? "Khan" : 60.9898676
// if (newAge == "Khan") {
//     console.log(newAge.toUpperCase())
// }
// if (typeof newAge == "string") {
//     console.log(newAge.toUpperCase())
// }
// typeof newAge == "string" 
// ? newAge.toUpperCase()
// : console.log(newAge.toFixed(2));
let newName = Math.random() < 0.6 ? "Haseeb" : undefined;
console.log(newName === null || newName === void 0 ? void 0 : newName.toUpperCase()); //possibly undefine
let anotherName;