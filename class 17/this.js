"use strict";
// let person1 = "faraz"
// let Person2 = "riaz"
// console.log(this);
let person1 = {
    name: "faraz",
    age: 24,
    sayName: function () {
        console.log(this.name);
    },
    address: {
        street: "wallstreet",
        town: "shadman",
        sayStreet: function () {
            console.log(this);
        }
    }
};
// person1.sayName()
person1.address.sayStreet();
