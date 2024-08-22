// function parentFunction(func : ()=> void){
//     console.log("I'm the parent function");
//     func()
// }
// const childFunction = ()=>{
//     console.log("I'm the child function");
// }
// //using separate function, so that we can use this anywere
// parentFunction(childFunction)
//making argument of function with in the call, as it is porhibit us from using the child again
// parentFunction(function (){
// console.log("I'm the child function");
// })
function callName(func) {
    let name = "Hasnain";
    func(name);
}
function processUserInput(name) {
    console.log(`Hello ${name}`);
}
callName(processUserInput);
export {};
