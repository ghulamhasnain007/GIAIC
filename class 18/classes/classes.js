"use strict";
//'!' Non Null assertion 
class User {
    constructor(name1, email1, isMarried) {
        // console.log("Constructor");
        this.name = name1;
        this.email = email1;
        this.isMarried = isMarried;
    }
    getName(naam) {
        console.log(naam);
    }
}
// If we making instance of any class it will automaticallty create an instructor
// instance of class User
let user1 = new User("jjjj", "dejej@gmial.com", false);
let user2 = new User("hasnain", "hasnain@gmial.com", false);
let user3 = new User("ghulam", "ghulam@gmial.com", false);
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user3.getName("jsjss"));
