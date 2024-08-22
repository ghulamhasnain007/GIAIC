// console.log("Hello World 1");
// // setTimeout(() => {
// //     console.log("Hello World 2");
// // }, 2000);
// function greet(){
//     console.log("Hello World 2");
// }
// setTimeout(greet,2000)
// console.log("Hello World 3");
function washing(callback) {
    console.log("Washing Started..");
    setTimeout(() => {
        console.log("Washing done!");
        callback();
    }, 5000);
}
console.log("making biryani");
function sooking(callback) {
    console.log("Sooking Started..");
    setTimeout(() => {
        console.log("Sooking done!");
        callback();
    }, 3000);
}
function drying() {
    console.log("Drying Started..");
    setTimeout(() => {
        console.log("Drying done!");
    }, 5000);
}
setTimeout(() => {
    console.log("Folding clothes");
}, 2000);
washing(() => {
    sooking(() => {
        drying();
    });
});
export {};
