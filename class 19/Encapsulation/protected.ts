class Bank {
    balance: number;
    protected accountNumber: number;
    userName: string;

    constructor(balan: number, aNumber: number, uName: string) {
        this.balance = balan,
            this.accountNumber = aNumber,
            this.userName = uName
    }
}
class Bank2 extends Bank {
    constructor(balance: number, accNumber: number, userName: string) {
        super(balance, accNumber, userName)
        this.accountNumber = accNumber,
            this.balance = balance,
            this.userName = userName
    }
}
let myObj2 = new Bank2(762, 27627, "Hasnain")
console.log(myObj2);

//protected = In this we can use the value in derived classes 
             //but cannot access them outside of class alike private which does not give access to anywhere