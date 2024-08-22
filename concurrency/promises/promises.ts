// const  returnMoney = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         rej("Failure!!")
//     }, 3000)
// })


// returnMoney
// .then((value)=>{
//     console.log(value);
//     console.log("Thank you for giving money")
// })
// .catch((value)=>{
//     console.log(value)
//     console.log("Sorry, I am unable to return Money")
// })
// // console.log(promise)


function washing(){
    console.log("Washing Started ...");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("Washing Done!")
        },5000)
    })
}
function sooking(){
    console.log("Sooking Started ...");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Sooking Done!")
        },3000)
    })
}
function drying(){
    console.log("Drying Started ...");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Drying Done!")
        },2000)
    })
}

washing()
.then((value)=>{
    console.log(value);
    return sooking()
})
.then(value =>{
    console.log(value);
    return drying()
})
.then(value =>{
    console.log(value);
})
.catch((value)=>{
    console.log(value);
})