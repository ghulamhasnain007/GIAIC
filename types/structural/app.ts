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



enum Color {Red, Green, Blue};//starts with 0
let c: Color = Color.Green;

enum Color1 {Red = 1, Green, Blue};//starts with 0
console.log(Color1.Red)
console.log(Color1[1])