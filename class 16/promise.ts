
function prepare(taskName:string, delay:number){
    let promise:Promise<void> = new Promise((resolve, reject)=>{
        let error=true
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

prepare("add Water",0)
.then(()=> prepare("add tea leaves", 5000))
.then(()=> prepare("add milk", 10000))
.then(()=> prepare("add sugar",2000))
.then(()=> prepare("tea is ready",0))
.catch(()=> console.log("Some error"))