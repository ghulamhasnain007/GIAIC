

// prepare("add Water",0)
// .then(()=> prepare("add tea leaves", 5000))
// .then(()=> prepare("add milk", 10000))
// .then(()=> prepare("add sugar",2000))
// .then(()=> prepare("tea is ready",0))
// .catch(()=> console.log("Some error"))

// let promise = new Promise((resolve, reject)=>{
    //     let percentage= 90
    //     if(percentage >=80){
//         resolve("GOOD")
//     }
//     else{
//         reject("BAD")
//     }
// })


// promise.then((res)=> console.log(res))
// .catch((error)=> console.log(error))

// console.log("After Promise");

function prepare(taskName:string, delay:number){
    let promise:Promise<void> = new Promise((resolve, reject)=>{
        // let error=true
        let error = false
        if(!error){
            setTimeout(() => {
            console.log(taskName)
            resolve()
        }, delay);
        }
        else{
            reject()
        }
    })
    return promise
}

async function runPromises(){
    try{
        let step1 = await prepare("add water",0)
        let step2 = await prepare("add tea leaves",5000)
        throw new Error("Error")
        let step3 = await prepare("add milk",10000)
        let step4 = await prepare("add sugar",2000)
        let step5 = await prepare("tea ready",0)
    }
    catch(error){
        console.log("Something went wrong");
    }
    finally{
        console.log("This is finally");
        
    }
}

try{
    runPromises()
}
catch(error){
    console.log(error);
}