console.log("Start");

let nam = "Hasnain"

console.log(nam);

let age: number = 18
if(age>18){
    console.log("You are an adult");
}
else{
    console.log("You are not an adult");
}

const bestFriends: string[] = ["Hamza", "Ali", "Junaid", "Haseeb"]

for(let i=0; i<bestFriends.length; i++){
    console.log(`Best Friend ${bestFriends[i]}`);
}
type TCar = {
    name: string;
    model: number;
    brand: string
}

let car: TCar ={
    name: "Corolla",
    model: 2009,
    brand: "Toyota"
}

console.log(car.brand);
console.log(car.name);

console.log("End");
