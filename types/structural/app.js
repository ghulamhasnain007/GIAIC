"use strict";
// interface Ball{
//     diameter : number;
// }
// interface Sphere{
//     diameter: number
// }
// let ball : Ball = {diameter: 12}
// let sphere : Sphere = {diameter: 20}
// ball = sphere
// sphere = ball
// interface Tube{
//     diameter : number;
//     length : number
// }
// let tube: Tube = {diameter: 40, length: 25}
// // tube = ball//Error
// ball = tube
// console.log(ball);
// type FrontendDev = {
//     html: boolean;
//     css: boolean;
//     typescript: boolean;
//     next: boolean;
// }
// let riaz = {
//     html: true,
//     css: true,
//     typescript: true,
//     next: true,
//     angular: true,
//     ai: true,
// }
// let candidate: FrontendDev = riaz
// console.log(candidate);
// let x : {id: number; [x : string]: string}
// x = {
//     id :12
// }
// let x: { [y: number]: string };
// x = {
//     1 : "Alice",
//     2 : 'hasnain'
//     // age: 30  // Error: Type 'number' is not assignable to type 'string'
// };
// console.log(x[1]);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //starts with 0
let c = Color.Green;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
; //starts with 0
console.log(Color1.Red);
console.log(Color1[1]);
