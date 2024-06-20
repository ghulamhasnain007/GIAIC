//Callback
function prepareTea(task:string,delay:number, cb:()=>void){
    console.log(task);
    setTimeout(() => {
        cb()
    }, delay);
}

prepareTea("add Water", 0, ()=>{
    prepareTea("add tea leaves", 5000, ()=>{
        prepareTea("add milk",10000, ()=>{
            prepareTea("add sugar", 2000, ()=>{
                prepareTea("tea is ready",3000,()=>{
                    console.log("Tea is Fantastic");
                })
            })
        })
    })
})