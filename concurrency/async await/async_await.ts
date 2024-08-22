function washing(){
    console.log("Washing Started ...");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Washing Done!")
        },1000)
    })
}
function sooking(){
    console.log("Sooking Started ...");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("Sooking Fail!")
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

async function runWashingMacine(){
    try{
        const result1 = await washing()
        console.log(result1);
        const result2 = await sooking()
        console.log(result2);
        const result3 = await drying()
        console.log(result3);
    }
    catch(error){
        console.log("Error ", error);  
    }
}

runWashingMacine()

// const myFunction = (x:number): number => x*x

// function second(x:number):number{
//     return x*x
// }

// function sum(...num : number[]):number{
//     return num.reduce((a,b)=> a+b,0)
// }

const sum = (...num: number[]) : number => num.reduce((a,b) => a+b ,0)