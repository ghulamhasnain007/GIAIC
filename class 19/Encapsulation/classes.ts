//Encapsulation:  protecting the things

class BankAccount{
    private balance: number;
    accountNumber: number;
    userName: string;
    private showUser(){
        let age = 12
        return age
    }

    constructor(balan:number, aNumber:number, uName:string){
        this.balance = balan;
        this.accountNumber = aNumber;
        this.userName = uName
    }

    get showBalance(){
        return this.balance
    }
    get show(){
        return this.showUser()
    }
    set setAccNumber(val:number){
        this.accountNumber = val
    }
}

let myObj = new BankAccount(1233, 1234, "Sarwar")

//getting a private property
console.log(myObj.showBalance);
console.log(myObj.show);

//setting Account Value
myObj.setAccNumber = 1876

console.log(myObj);
